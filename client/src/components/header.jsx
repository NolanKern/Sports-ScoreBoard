import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Header extends Component {
  renderLinks() {
    if (this.props.authenticated) {
      // show a link to sign out
      return <li className="navbar-item">
        <Link className="navbar-link" to="/signout">Sign Out</Link>
      </li>
    } else {
      // show a link to sign in or sign up
      return [
        <li className="navbar-item" key={1}>
          <Link id="signin-btn" className="button has-background-danger has-text-white" to="/signin">
            <span className="icon"><i className="fas fa-sign-in-alt"></i>
            </span>
            
            
            <p>Sign In</p>
          </Link>
        </li>,
        <li className="navbar-item" key={2}>
          <Link id="signup-btn" className="button has-background-danger has-text-white" to="/signup">
            <span className="icon">
              <i className="fas fa-user-plus"></i>
            </span>
            

            <p>Sign Up</p>
          </Link>
        </li>
      ];
    }
  }

  render() {
    return (
      <nav className="navbar has-background-black-ter">
        <div className="container">
          <Link to="/">
            <div className="title is-2 has-text-danger">Score<span className="has-text-white">Zone</span></div>
          </Link>
          <ul className="navbar-menu">
            <div className="navbar-end">
              {this.renderLinks()}
            </div>
          </ul>
        </div>
        
      </nav>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);
