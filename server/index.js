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

//declare default server port
app.port = 3000
//declare list for connected user
let connectedUsers = []

//listen for socket connections
io.on('connection', (socket) => {
    //listen on message event sent from client
    socket.on('message', (data) => {
        //add to connected users list when someone join the chat and server receive a notify message
        if(data.type === 'notify'){
            connectedUsers[data.id] = data.username
        }

        //send the received message to all connected users
        socket.broadcast.emit('message', data)
    });

    //listen on user typing event
    socket.on('typing', (username) => {
        //broadcast the typing event to all connected users except the emitter
        socket.broadcast.emit('typing', username)
    });

    //listen on user stopped typing event
    socket.on('stopTyping', (username) => {
        //broadcast the typing event to all connected users except the emitter
        socket.broadcast.emit('stopTyping', username)
    });

    //listen on disconnect users
    socket.on('disconnect', () => {
        //notify all user of someone leaving the chat
        socket.broadcast.emit('message', {
            type: 'notify',
            username: connectedUsers[socket.id] ?? "Someone",
            id: socket.id,
            message: `${connectedUsers[socket.id] ?? "Someone"} Left The Chat`
        })

        //update connected users list
        delete connectedUsers[socket.id]
    });
});

//server listen to specific port or default port is 3000
server.listen(app.port || 3000, () => console.log('Server listening to port 3000'))