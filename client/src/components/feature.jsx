import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions';

class Feature extends Component {
  componentWillMount() {
    this.props.fetchMessage();
  }

  render() {
    return (
      <div>
        <div>{this.props.message}</div> 
        
        <div className="columns is-multiline">
          <div className="column">
            <p id="welcome-title" className="title is-1 has-text-white has-text-centered">Welcome!</p>

            <p className="title is-3 has-text-grey has-text-centered">What would you like to do?</p>        
          </div> 
        </div>
        
        <br/><br/><br/><br/>

        <div className="columns is-variable is-3">
          

          <Link id="host-btn" className="column is-3 is-offset-3 room-btn-div has-text-centered" to="/host">
          <br/><br/>
            <span className="icon room-btn-icon"><i className="fas fa-plus"></i></span>
            <br/><br/>

            <p className="room-btn-p">Host a Game</p>
          </Link>
          <Link id="join-btn" className="column is-3 room-btn-div has-text-centered" to="/join">
          <br/><br/>
            <span className="icon room-btn-icon"><i className="fas fa-sign-out-alt"></i></span>
            <br/><br/>
            
            <p className="room-btn-p">Join a Game</p>
          </Link>
        </div>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(Feature);
