**💬 Real-Time Chat App**

A real-time chat application built using Node.js, Socket.IO, and React.js. Supports multiple chat rooms with instant messaging.

**🚀 Features**

✅ Real-time messaging using WebSockets

✅ Multiple chat rooms support

✅ User join/leave notifications

✅ Auto-scroll message window

✅ Press "Enter" to send messages

**🏢 Tech Stack**

**Frontend:** React, Socket.IO-client

**Backend:** Node.js, Express, Socket.IO

**🎯 Setup Instructions**

**🔹 1. Clone the repository**

git clone https://github.com/your-username/real-time-chat-app.git
cd real-time-chat-app

**🔹 2. Install backend dependencies**

cd backend
npm install

**🔹 3. Install frontend dependencies**

cd ../frontend
npm install

**🔹 4. Run the backend server**

cd ../backend
node server.js

Server starts on http://localhost:5000

**🔹 5. Run the frontend React app**

cd ../frontend
npm start

Frontend runs on http://localhost:3000

**🎮 How to Use**

Open http://localhost:3000 in two different browsers.

Enter a username and room name to join.

Type a message and press Send or Enter.

Messages appear instantly across all connected users.

**🛠️ Troubleshooting**

❌ react-scripts not found → Run npm install in the frontend folder.

❌ Cannot connect to server → Ensure backend is running on port 5000.

❌ Messages appear twice → Fix duplicate event listeners in App.js and server.js.

**👨‍💻 Contributing**

Pull requests are welcome! Fork the repo and submit your changes.

**🐝 License**

This project is open-source under the MIT License.

**🌟 Show Your Support**

If you like this project, give it a ⭐ ! 😊
