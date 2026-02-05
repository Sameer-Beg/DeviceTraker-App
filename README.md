# 🌍 Real-Time Live Location Tracker

A real-time web application that tracks and displays live user locations on a map.  
It uses browser GPS, Socket.IO for real-time communication, and Leaflet.js with OpenStreetMap for map rendering.

---

## 🚀 Features
- Live GPS location tracking
- Real-time marker updates on the map
- Multiple users visible at the same time
- Automatic marker removal when a user disconnects
- Secure geolocation access using HTTPS (ngrok)

---

## 🛠 Tech Stack
- **Frontend:** HTML, CSS, JavaScript , ejs 
- **Backend:** Node.js, Express.js
- **Real-Time:** Socket.IO
- **Maps:** Leaflet.js + OpenStreetMap
- **HTTPS Tunnel:** ngrok

---

## 📂 Project Structure
project/
│
├── public/
│ ├── css/
│ │ └── style.css
│ └── js/
│ └── script.js
│
├── views/
│ └── index.ejs
│
├── index.js
├── package.json
└── README.md

### 📁 Folder & File Explanation

- **public/**  
  Contains all static files used by the frontend.

  - **css/style.css** → Styling for the web application  
  - **js/script.js** → Client-side JavaScript for socket connection and live location updates

- **views/**  
  - **index.ejs** → Main UI template rendered by Express

- **app.js**  
  → Main server file (Express + Socket.IO logic)

- **package.json**  
  → Project dependencies and scripts

- **README.md**  
  → Project documentation

---

🔹 **Step 4: Install & Setup ngrok**

Download ngrok from:
👉 https://ngrok.com/download

Create a free ngrok account and copy your authtoken

Add authtoken in terminal:

ngrok config add-authtoken YOUR_AUTHTOKEN_HERE

🔹 **Step 5: Start ngrok Tunnel**
ngrok http 3002


You will get a public HTTPS URL like:

https://xxxx-xxxx.ngrok-free.dev

🔹 **Step 6: Open the App in Browser**

Open the ngrok HTTPS URL on:

💻 Laptop browser

📱 Mobile browser

***⚠️ Do NOT use localhost on mobile***
***⚠️ GPS works only on HTTPS***

🔹**Step 7: Allow Location Access**

On mobile browser:

Allow location permission

Enable Precise Location

🔹 **Step 8: Test Live Location**

Keep laptop and mobile on the same ngrok URL

Move the mobile device (preferably outdoors)

Live marker movement will appear on the map 🎯

🧠 How It Works

Browser fetches live GPS coordinates using Geolocation API

Location data is sent to the server via Socket.IO

Server broadcasts location to all connected users

Leaflet updates markers in real time on the map

Marker is removed when a user disconnects

❗ Important Notes

Desktop browsers do not provide real GPS movement

Use a real mobile device for accurate testing

HTTPS is mandatory for geolocation access


