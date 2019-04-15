const express = require('express');
const http = require('http');
const server = http.createServer(app);
const io = require('socket.io')(server);

var app = express();

io.on('connection', client => {
    client.on('event', data => { /* … */ });
    client.on('disconnect', () => { /* … */ });
});

server.listen(8888, () => {
    console.log('服务器启动成功！');
});
