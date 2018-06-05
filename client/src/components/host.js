import React, { Component } from "react";
import io from "socket.io-client";
import { connect } from "react-redux";
import { Link } from "react-router";
import {updateHome, updateAway, updateMinutes, updateSeconds} from '../actions';
// import s from "./Socket.css";

import ChangeComps from "./SocketComponents/ChangeComps";
import ScoreBoard from "./SocketSpectator/ScoreBoard";

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
        <ChangeComps socket={socket} {...this.props}/>
        <ScoreBoard socket={socket} {...this.props} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    homeScore: state.score.homeScore,
    awayScore: state.score.awayScore,
    minutes: state.minutes,
    seconds: state.seconds
  };
}
const mapDispatchToProps = function(dispatch){
  return{
    updateHome(value){
      dispatch(updateHome(value))
    },
    updateAway(value){
      dispatch(updateAway(value))
    },
    updateMinutes(){
      dispatch(minutes())
    },
    updateSeconds(){
      dispatch(seconds())
    }
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Host);
