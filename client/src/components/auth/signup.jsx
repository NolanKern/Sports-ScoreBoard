import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signup extends Component {
  handleFormSubmit(formProps) {
    // Call action creator to sign up the user!
    this.props.signupUser(formProps);
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
    const { handleSubmit, fields: { email, password, passwordConfirm }} = this.props;

    return (

      <div id="signin-form" className="column has-background-white">
        <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <div className="field">
            <label className="label">Email:</label>

            <div className="control has-icons-left">
              <input {...email}type="text" className="input" placeholder="someone@example.com"/>

              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>

            {email.touched && email.error && <div className="error">{email.error}</div>}
          </div>
          <div className="field">
            <label className="label">Password:</label>

            <div className="control has-icons-left">
              <input {...password}type="password" className="input" placeholder="********"/>

              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </div>

            {password.touched && password.error && <div className="error">{password.error}</div>}
          </div>
          <div className="field">
            <label className="label">Confirm Password:</label>
            
            <div className="control has-icons-left">
              <input {...passwordConfirm}type="password" className="input" placeholder="********"/>

              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </div>

            {passwordConfirm.touched && passwordConfirm.error && <div className="error">{passwordConfirm.error}</div>}
          </div>
          {this.renderAlert()}
          <br/>
          
          <div className="has-text-centered">
            <button action="submit" className="button has-background-danger has-text-white">Sign up</button>
          </div>
        </form>
      </div>
    );
  }
}

function validate(formProps) {
  const errors = {};

  if (!formProps.email) {
    errors.email = 'Please enter an email';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }

  if (!formProps.passwordConfirm) {
    errors.passwordConfirm = 'Please enter a password confirmation';
  }

  if (formProps.password !== formProps.passwordConfirm) {
    errors.password = 'Passwords must match';
  }

  return errors;
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signup',
  fields: ['email', 'password', 'passwordConfirm'],
  validate
}, mapStateToProps, actions)(Signup);
