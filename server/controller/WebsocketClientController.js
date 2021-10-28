import { aWss } from "../index.js";

function connectionHandler(ws, msg) {
  ws.id = msg.id;
  broadcastConnection(ws, msg);
}

function broadcastConnection(ws, msg) {
  console.log(msg);
  aWss.clients.forEach((client) => {
    //    if (client.id === msg.id) {
    //      client.send(JSON.stringify(msg));
    //    }
    client.send(JSON.stringify(msg));
  });
}

class WebsocketClientController {
  connect(ws, res) {
    ws.on("message", (msg) => {
      msg = JSON.parse(msg);
      switch (msg.event) {
        case "connection":
          connectionHandler(ws, msg);
          break;
        case "message":
          broadcastConnection(ws, msg);
          break;
      }
    });
  }
}

export default new WebsocketClientController();
