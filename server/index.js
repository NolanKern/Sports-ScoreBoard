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
const io = require("socket.io")(server);

// Initialize a counter for the score of each team
let homeScore=0;
let awayScore=0;

// Listen for connection from client
io.on("connection", function(socket) {
  let userAdded = false;

  socket
    .on("disconnect", function(err) {
      console.log("User disconnected!");
    })
    .on("chat message", function(msg) {
      io.emit("chat message", msg);
      console.log(`message from ${socket.username}`);
    })
    .on("add user", function(user) {
      if (userAdded) return;

      socket.username = user;
      userAdded = true;
      io.emit("add user", user);
    })
    .on('homeScore6', action=>{
      homeScore+=6;
      io.emit('home_score', { response: homeScore});
    })
    .on('homeScore1', action =>{
      homeScore++;
      io.emit('home_score', { response: homeScore});
    })
    .on('awayScore6', action=>{
      awayScore+=6;
      io.emit('away_score', { response: awayScore});
    })
    .on('awayScore1', action=>{
      awayScore++;
      io.emit('away_score', { response: awayScore});
    });
});
