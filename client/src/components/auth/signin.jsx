import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

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
      // <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
      //   <div className="field">
      //     <p className="control has-icons-left ">
      //       <input {...email} className="input" type="email" placeholder="Email"/>
          
      //       <span className="icon is-small is-left">
      //         <i className="fas fa-envelope"></i>
      //       </span>
      //     </p>
      //   </div>
      //   <div className="field">
      //     <label>Password:</label>
      //     <input {...password} type="password" className="form-control" />
      //   </div>
      //   {this.renderAlert()}
      //   <button action="submit" className="btn btn-primary">Sign in</button>
      // </form>

      <div id="signin-form" className="column has-background-white">
        <div className="tabs is-centered">
          <ul>
            <li className="is-active">
              <a>Sign In</a>
            </li>
            <li>
              <a>
                <span>Sign Up</span>
              </a>
            </li>
          </ul>
        </div>
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
          
          <a action="submit" className="button has-background-danger has-text-white">Sign in</a>
          
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
