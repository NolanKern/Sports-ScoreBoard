import React, {Component} from 'react';


export default class Timer extends Component {
    constructor() {
      super();
      this.state = { time: {}, seconds: 5 };
      this.timer = 0;
      this.quarter = 1;
      this.running = true;
      this.startTimer = this.startTimer.bind(this);
      this.countDown = this.countDown.bind(this);
    }
  
    secondsToTime(secs){
      let hours = Math.floor(secs / (60 * 60));
  
      let divisor_for_minutes = secs % (60 * 60);
      let minutes = Math.floor(divisor_for_minutes / 60);
  
      let divisor_for_seconds = divisor_for_minutes % 60;
      let seconds = Math.ceil(divisor_for_seconds);
  
      let obj = {
        "h": hours,
        "m": minutes,
        "s": seconds
      };
      return obj;
    }
  
    componentDidMount() {
      let timeLeftVar = this.secondsToTime(this.state.seconds);
      this.setState({ time: timeLeftVar });
    }
  
    startTimer() {
      if (this.timer == 0 && this.running) {
        this.timer = setInterval(this.countDown, 1000);
      }
    }
  
    countDown() {
      // Remove one second, set state so a re-render happens.
      let seconds = this.state.seconds - 1;
      this.setState({
        time: this.secondsToTime(seconds),
        seconds: seconds,
      });
      
      // Check if we're at zero.
      if (seconds == 0) { 
        clearInterval(this.timer);
        incrementQuarter();
      }
    }

    incrementQuarter(){
        this.setState({
            quarter: (quarter +1)
        })
    }

    pauseTimer(){
      if(this.running){
        this.setState({
          running: false
        })
        startTimer();
      }
      else{
        this.setState({
          running: true
        })
        startTimer();
      }
    }
  
    render() {
      return(
        // 
        <div className='container'>
        {/* this is the view of the host */}
            Quarter: {this.state.quarter}
            <button onClick={this.startTimer}>Start</button>
            <button onClick={this.pauseTimer}>Pause</button>
            m: {this.state.time.m} s: {this.state.time.s}

            {/* render of the view of the spectator */}
            <div>
                Quarter: {this.state.quarter}
                m: {this.state.time.m} s:{this.state.time.s}
            </div>
        </div>
        // 
      );
    }
  }