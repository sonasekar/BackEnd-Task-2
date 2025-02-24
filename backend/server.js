const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

app.use(cors()); // Allow cross-origin requests

const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

const chatRooms = {}; // Store user-room mapping

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("joinRoom", ({ username, room }) => {
    socket.join(room);
    chatRooms[socket.id] = room;
    socket.to(room).emit("message", { user: "System", text: `${username} joined the room.` });
  });

  socket.on("sendMessage", ({ room, user, message }) => {
    io.to(room).emit("message", { user, text: message });
  });

  socket.on("disconnect", () => {
    const room = chatRooms[socket.id];
    if (room) {
      socket.to(room).emit("message", { user: "System", text: "A user left the chat." });
      delete chatRooms[socket.id];
    }
    console.log("User disconnected:", socket.id);
  });
});

server.listen(5000, () => console.log("Server running on port 5000"));
