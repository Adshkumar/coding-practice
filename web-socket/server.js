import http from 'node:http';
// import fs from 'node:fs/promises';
import fs from 'fs/promises';
import path from 'path';
import { WebSocket, WebSocketServer } from 'ws';
const PORT = process.env.PORT ?? 9000;

const httpServer = http.createServer(async function (req, res) {
    const indexFile = await fs.readFile(path.resolve('./index.html'), 'utf-8')
    res.setHeader('Content-Type', 'text/html');
    return res.end(indexFile);
})
const wsServer = new WebSocketServer({ server: httpServer });

wsServer.on('connection', (WebSocket) => {
    console.log('Websocket Connection...');

    WebSocket.on('message', (data) => {
        console.log('Websocket Message Recv.', data.toString());

        wsServer.clients.forEach((client) => {
            if(client.readyState === client.OPEN){
                client.send(data.toString());
            }
        })
    })
})

http.createServer(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})