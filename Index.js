import http from 'http';
import WebSocket, { WebSocketServer } from 'ws';

// Use Railway's assigned PORT or fallback to 3000
const PORT = process.env.PORT || 3000;

// Create a simple HTTP server (prevents Railway from crashing)
const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Wallet Tracker is running\n');
});

// Attach WebSocket server to HTTP server
const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
  console.log('Client connected');
  ws.send('Welcome to Wallet Tracker WebSocket server!');

  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
    ws.send(`Echo: ${message}`);
  });

  ws.on('close', () => {
    console.log('Client disconnected');
  });
});

// Start server
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
