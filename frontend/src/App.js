import React, { useState, useEffect } from "react";
import socket from "./socket"; // Import Socket.IO connection

const App = () => {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [joined, setJoined] = useState(false);

  // Handle incoming messages and update state
  useEffect(() => {
    socket.on("message", (data) => {
      console.log("📩 Message received:", data);
      setMessages((prevMessages) => [...prevMessages, data]); // Append new message
    });

    return () => {
      socket.off("message"); // Cleanup event listener on unmount
    };
  }, []);

  // Join a chat room
  const joinRoom = () => {
    if (username.trim() && room.trim()) {
      console.log(`🔗 Joining room: ${room} as ${username}`);
      socket.emit("joinRoom", { username, room });
      setJoined(true);
    } else {
      alert("Username and room are required!");
    }
  };

  // Send a message
  const sendMessage = () => {
    if (!message.trim()) return; // Prevent empty messages

    console.log("📤 Sending message:", message);
    socket.emit("sendMessage", { room, user: username, message });
    setMessage(""); // Clear input field after sending
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      {!joined ? (
        <div>
          <h2>Join Chat Room</h2>
          <input
            type="text"
            placeholder="Enter Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Room Name"
            value={room}
            onChange={(e) => setRoom(e.target.value)}
          />
          <button onClick={joinRoom}>Join</button>
        </div>
      ) : (
        <div>
          <h2>Chat Room: {room}</h2>
          <div
            style={{
              border: "1px solid #ccc",
              height: "300px",
              overflowY: "scroll",
              padding: "10px",
              marginBottom: "10px",
            }}
          >
            {messages.map((msg, index) => (
              <p key={index}>
                <strong>{msg.user}:</strong> {msg.text}
              </p>
            ))}
          </div>
          <input
            type="text"
            placeholder="Type a message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && sendMessage()} // Send on Enter key
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      )}
    </div>
  );
};

export default App;
