// import { io } from "socket.io-client";

// const SOCKET_URL = import.meta.env.VITE_SOCKET_URL;

// export const socket = io(SOCKET_URL);

// import { io } from "socket.io-client";

// const SOCKET_URL = import.meta.env.VITE_SOCKET_URL;

// export const socket = io(SOCKET_URL, {
//   transports: ["websocket", "polling"],
// });

// socket.on("connect_error", (err) => {
//   console.error("Socket connect error:", err.message);
// });


import { io } from "socket.io-client";

const SOCKET_URL = import.meta.env.VITE_SOCKET_URL;

export const socket = io(SOCKET_URL, {
  transports: ["polling"], // 🔹 disable websocket
});

socket.on("connect_error", (err) => {
  console.error("Socket connect error:", err.message);
});
