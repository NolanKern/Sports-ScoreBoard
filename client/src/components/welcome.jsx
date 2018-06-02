import React, { Component } from 'react';
import SignIn from './auth/signin';
import SignUp from './auth/signup';

class Welcome extends Component {
  constructor() {
    super();
    this.state = {
        tab: ""
    }
  }

  // renderForm(){
  //   if 
  // }
  handleSignIn(){
    this.setState({
      tabs: 'signin'
    });
  }
  handleSignUp(){
    this.setState({
      tabs: 'signup'
    });
  }

  render(){
    const form = (this.state.tab == 'signin') ?
    (<SignIn />) : (<SignUp />);

    return (

      <div id="signin-form" className="column has-background-white">
        <div className="tabs is-centered">
          <ul>
            <li className="is-active">
              <a
                className="button"
                onclick={this.handleSignIn}
                >
                Sign In</a>
            </li>
            <li>
              <a
                className="button"
                onclick={this.handleSignUp}
                >
                Sign Up</a>
            </li>
          </ul>
        </div>
        
        {form}
        
      </div>
    );
  }
}



export default Welcome;
