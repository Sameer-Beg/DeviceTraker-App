const express = require("express");
const path = require("path");
const http = require("http");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("send-location", (data) => {
    console.log("📍 location from:", socket.id, data);
    io.emit("receive-location", {
      id: socket.id,
      latitude: data.latitude,
      longitude: data.longitude
    });
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
    io.emit("user-disconnected", socket.id);
  });
});

app.get("/", (req, res) => {
  res.render("index");
});

server.listen(3002, () => {
  console.log("Server running on port 3002");
});
