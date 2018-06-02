import React, { Component } from "react";
import io from "socket.io-client";
// import s from "./Socket.css";

import ChangeComps from "./SocketComponents/ChangeComps";

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

class Host extends Component {
  constructor() {
    super();
    this.state = state;
  }

  render() {
    const { socket } = this.state;
    return (
      <div>
        <ChangeComps socket={socket} />
      </div>
    );
  }
}

export default Socket;