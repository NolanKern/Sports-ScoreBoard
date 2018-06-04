import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { Link } from 'react-router-dom';

class Signin extends Component {

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
      
      <div id="signin-form" className="column has-background-white">
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <div className="field">
            <label className="label">Email:</label>
            
            <div className="control has-icons-left">
              <input {...email} type="text" className="input" placeholder="someone@example.com"/>

              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>         
          </div>
          <div className="field">
            <label className="label">Password:</label>
            
            <div className="control has-icons-left">
              <input {...password} type="password" className="input" placeholder="******"/>

              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </div>         
          </div>
          {this.renderAlert()}
          <br/>
          
          <div className="has-text-centered">
            <button action="submit" className="button has-background-danger has-text-white">Sign in</button>
          </div>
          
          
        </form>
      </div>

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
