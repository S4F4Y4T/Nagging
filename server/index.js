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

let connectedUsers = []

io.on('connection', (socket) => {

    socket.on('message', (data) => {
        if(data.type === 'notify'){
            connectedUsers[data.id] = data.username
        }

        io.emit('message', data);
    });

    // socket.on('typing', (msg) => {
    //     io.emit('typing', msg);
    // });

    socket.on('disconnect', () => {
        io.emit('message', {
            type: 'notify',
            username: connectedUsers[socket.id] ?? "Someone",
            id: socket.id,
            message: `${connectedUsers[socket.id] ?? "Someone"} Left The Chat`
        })
    });
});

server.listen(app.port || 3000, () => console.log('Server listening to port 3000'))