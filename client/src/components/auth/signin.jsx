import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { Link } from 'react-router-dom';

class Signin extends Component {
  constructor(){
    super();
    this.state = {
      tab: "signin"
    }
  }

  handleFormSubmit({ email, password }) {
    // Need to do something to log user in
    this.props.signinUser({ email, password });
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="notification is-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, fields: { email, password }} = this.props;

    return (
      
      <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
        <div className="field">
          <label className="label">Email:</label>
          
          <div className="control has-icons-left">
            <input {...email} type="text" className="input" placeholder="Email"/>

            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
          </div>         
        </div>
        <div className="field">
          <label className="label">Password:</label>
          
          <div className="control has-icons-left">
            <input {...password} type="text" className="input" placeholder="******"/>

            <span className="icon is-small is-left">
              <i className="fas fa-lock"></i>
            </span>
          </div>         
        </div>
        <br/>
        
        <div className="has-text-centered">
          <a action="submit" className="button has-background-danger has-text-white">Sign in</a>
        </div>
        
        
      </form>

    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);
