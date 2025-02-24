import { io } from "socket.io-client";

const socket = io("http://localhost:5000");  // Ensure the backend URL is correct

export default socket;
