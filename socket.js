const express = require('express');
const WebSocket = require('ws');
const http = require('http');
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

var app = express();

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log('received: %s', message);
        ws.send(message);
    });
});
server.listen(8888, () => {
    console.log('服务器启动成功！');
});