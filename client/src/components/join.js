import React, { Component } from "react";
import io from "socket.io-client";
import ScoreBoard from './SocketSpectator/ScoreBoard';
let state;

if(process.env.NODE_ENV === "production"){
  state = {
    socket: io()
  }
}else{
  state = {
    socket: io("http://localhost:8080")
  }
}

class Join extends Component {
    render(){
        <ScoreBoard />
    }
}