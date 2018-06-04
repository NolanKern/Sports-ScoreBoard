import React, { Component } from 'react';
import { connect } from 'react-redux';
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
          <div className="room-btn-div column is-3 is-offset-3">
            <p className="has-text-grey">create room</p>
          </div>
          <div className="room-btn-div column is-3">
            <p className="has-text-grey">join room</p>
          </div>
        </div>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return { message: state.auth.message };
}

export default connect(mapStateToProps, actions)(Feature);
