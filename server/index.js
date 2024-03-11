const express = require('express')
const http = require('http')
const app = express();
const server = http.createServer(app)
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173', // Replace with your Vue app's URL
    },
})

app.port = 3000

io.on('connection', (socket) => {
    socket.on('joined', (username) => {
        io.emit('joined', `${username} Joined The Chat`);
    });

    socket.on('typing', (msg) => {
        io.emit('typing', msg);
    });

    socket.on('message', (msg) => {
        io.emit('message', msg);
    });

    socket.on('disconnect', () => {
        console.log('User Leave The Chat');
    });
});

server.listen(app.port || 3000, () => console.log('Server listening to port 3000'))
