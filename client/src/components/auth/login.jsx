import React, { Component } from 'react';
import { Link } from 'react-router';

class Login extends Component {
    render() {
        return(
            <div id="signin-form" className="column has-background-white">
                <div className="tabs is-centered">
                <ul>
                    <li className="is-active">
                        <Link to="/signin">Sign In</Link>
                    </li>
                    <li>
                        <Link to="/signup">Sign Up</Link>
                    </li>
                </ul>
                </div>
            </div>
        )
    }
}

export default Login;