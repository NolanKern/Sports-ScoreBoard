import React, { Component } from "react";
import io from "socket.io-client";
import { connect } from "react-redux";
import { Link } from "react-router";
// import s from "./Socket.css";

import ChangeComps from "./SocketComponents/ChangeComps";

let state;

if (process.env.NODE_ENV === "production") {
  state = {
    socket: io()
  };
} else {
  state = {
    socket: io("http://localhost:3090")
  };
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

function mapStateToProps(state) {
  return {
    socket: state.socket
  };
}

export default connect(mapStateToProps, null)(Host);
