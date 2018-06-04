import React, { Component } from "react";

export default class Scores extends Component {
  constructor() {
    super();

    this.state = {
      homeScore: 0,
      awayScore: 0
    };
    this.incrementHome = this.incrementHome.bind(this);
    this.incrementAway = this.incrementAway.bind(this);
  }

  incrementHome(e) {
    const { value } = e.target;
    this.setState((prevState, props) => ({
      homeScore: prevState.homeScore + parseInt(value)
    }));
  }

//   Help here
  incrementAway(e) {
    const { value } = e.target;
    this.setState((prevState, props) => ({
      awayScore: prevState.awayScore + parseInt(value)
    }));
  }

  render() {
    return (
        
      <div className="container">
        <button value ='1' onClick={this.incrementAway}>Away +1</button>
        <button value ='2' onClick={this.incrementAway}>Away +2</button>
        <button value ='6' onClick={this.incrementAway}>Away +6</button>
        <button value ='1' onClick={this.incrementHome}>Home +1</button>
        <button value ='2' onClick={this.incrementHome}>Home +2</button>
        <button value ='6' onClick={this.incrementHome}>Home +6</button>

        {/* Below is the information that the user will see */}
        <div className='has-text-danger'>
          Home: {this.state.homeScore}
          Away: {this.state.awayScore}
        </div>
      </div>
    );
  }
}
