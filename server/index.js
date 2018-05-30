// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');
const config = require('./config')

// DB Setup
mongoose.connect(config.mongodb);

// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);

// // set-up a connection between the client and the server
// var socket = io.connect();

// // let's assume that the client page, once rendered, knows what room it wants to join
// var room = "abc123";

// socket.on('connect', function() {
//    // Connected, let's sign-up for to receive messages for this room
//    socket.emit('room', room);
// });

// socket.on('message', function(data) {
//      
// I think I have a switch here for what changes are made to the interface
// });
