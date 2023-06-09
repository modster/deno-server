// ws_client.js
// https://medium.com/deno-the-complete-reference/deno-websocket-server-in-oak-9fbb36f65f04

const ws = new WebSocket("ws://localhost:8000/wss");
ws.onopen = () => console.log("Connected to server");
ws.onmessage = (m) => {
  console.log("Got message from server: ", m.data);
  ws.send(`Some message ${crypto.randomUUID()}`);
};
ws.onclose = () => console.log("Disconnected from server");