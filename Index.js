// index.js
import WebSocket from "ws";

const socket = new WebSocket("wss://example.com/ws"); // replace with your ws URL

socket.on("open", () => {
    console.log("✅ Connected to WebSocket");
    // If authentication is needed:
    // socket.send(JSON.stringify({ method: "subscribe", params: ["address_activity"] }));
});

socket.on("message", (data) => {
    console.log("📩 Message received:", data.toString());
    // You can add filtering or send alerts here
});

socket.on("close", () => {
    console.log("❌ Connection closed, reconnecting...");
    setTimeout(() => process.exit(1), 3000); // restart via Railway
});
