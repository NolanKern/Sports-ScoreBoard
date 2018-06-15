import React, { Component } from "react";
import { connect } from 'react-redux';

class Scores extends Component {
  constructor(props) {
    super(props);

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
    console.log(this.props);
    return (
        
      <div className="container">
        <button 
          id="home-btn1" 
          className="button score-btn" 
          value ='1' 
          onClick={() => this.props.updateHome(parseInt(this.props.homeScore) + 1)}
        >
          Home +1
        </button>

        <button 
          id="home-btn2" 
          className="button score-btn" 
          value ='2' 
          onClick={() => this.props.updateHome(parseInt(this.props.homeScore) + 2)}
        >
          Home +2
        </button>

        <button 
          id="home-btn6" 
          className="button score-btn" 
          value ='6' 
          onClick={() => this.props.updateHome(parseInt(this.props.homeScore) + 6)}
        >
          Home +6
        </button>
        
        <button 
          id="away-btn1" 
          className="button score-btn" 
          value ='1' 
          onClick={() => this.props.updateAway(parseInt(this.props.awayScore) + 1)}
        >
          Away +1
        </button>

        <button 
          id="away-btn2" 
          className="button score-btn" 
          value ='2' 
          onClick={() => this.props.updateAway(parseInt(this.props.awayScore) + 2)}
        >
          Away +2
        </button>

        <button 
          id="away-btn6" 
          className="button score-btn" 
          value ='6' 
          onClick={() => this.props.updateAway(parseInt(this.props.awayScore) + 6)}
        >
          Away +6
        </button>

        

        {/* Below is the information that the user will see */}
        {/* <div className='has-text-danger'>
          Home: {this.state.homeScore}
          Away: {this.state.awayScore}
        </div> */}
      </div>
    );
  }
}


export default (Scores);