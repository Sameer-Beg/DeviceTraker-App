const socket = io();

const markers = {};
let isFirstLocation = true;

// get live location
if (navigator.geolocation) {
  navigator.geolocation.watchPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      console.log("📍 my location:", latitude, longitude);
      socket.emit("send-location", { latitude, longitude });
    },
    (error) => {
      console.log("GPS error:", error);
    },
    {
      enableHighAccuracy: true,
      maximumAge: 0
    }
  );
}

// init map
const map = L.map("map").setView([0, 0], 16);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "Sameer Map's"
}).addTo(map);

// receive locations
socket.on("receive-location", (data) => {
  console.log("📡 received:", data);
  const { id, latitude, longitude } = data;

  if (isFirstLocation) {
    map.setView([latitude, longitude], 16);
    isFirstLocation = false;
  }

  if (markers[id]) {
    markers[id].setLatLng([latitude, longitude]);
  } else {
    markers[id] = L.marker([latitude, longitude]).addTo(map);
  }
});

// remove marker
socket.on("user-disconnected", (id) => {
  if (markers[id]) {
    map.removeLayer(markers[id]);
    delete markers[id];
  }
});

socket.on("connect", () => {
  console.log("My socket id:", socket.id);
});
