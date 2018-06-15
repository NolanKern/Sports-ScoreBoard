import React, { Component } from "react";
import { connect } from 'react-redux';

export default class Timer extends Component {
  constructor() {
    super();
    this.state = {
      time: {},
      seconds: 12000,
      quarter: 1,
      timer: 0
    };
    // this.timer = 0;
    this.pauseTimer = this.pauseTimer.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.countDown = this.countDown.bind(this);
  }

  secondsToTime(secs) {
    let hours = Math.floor(secs / (60 * 60));

    let divisor_for_minutes = secs % (60 * 60);
    let minutes = Math.floor(divisor_for_minutes / 60);

    let divisor_for_seconds = divisor_for_minutes % 60;
    let seconds = Math.ceil(divisor_for_seconds);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    let obj = {
      h: hours,
      m: minutes,
      s: seconds
    };
    return obj;
  }

  componentDidMount() {
    let timeLeftVar = this.secondsToTime(this.state.seconds);
    this.setState({ time: timeLeftVar });
  }

  startTimer() {
      this.state.timer = setInterval(this.countDown, 1000);
  }

  countDown() {
    // Remove one second, set state so a re-render happens.
    let seconds = this.state.seconds - 1;
    this.setState({
      time: this.secondsToTime(seconds),
      seconds: seconds
    });

    // Check if we're at zero.
    if (seconds == 0) {
      clearInterval(this.state.timer);
      this.incrementQuarter();
    }
  }

  incrementQuarter() {
    this.setState((prevState, props) => ({
      quarter: prevState.quarter + 1
    }));
  }

  // Help Here
  pauseTimer() {
      clearInterval(this.state.timer);
  }

  render() {
    let minutes = this.state.time.m;
    let seconds = this.state.time.s;

    return (
      //
      <div className="container" className="has-text-white">
        {/* this is the view of the host */}
        <button id="time-start-btn" className="button score-btn" onClick={this.startTimer}>Start</button>
        <button id="time-pause-btn" className="button score-btn" onClick={this.pauseTimer}>Pause</button>
        <p id="timer">
          {minutes}:{seconds}
        </p>
        
        {/* render of the view of the spectator */}
        
      </div>
      //
    );
  }
}