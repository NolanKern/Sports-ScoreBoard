import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Signin from './components/auth/signin.jsx';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup.jsx';
import Login from './components/auth/login';
import Feature from './components/feature';
import RequireAuth from './components/auth/require_auth';
import Welcome from './components/welcome';
import reducers from './reducers';
import { AUTH_USER } from './actions/types';
import Host from './components/host.js';
import {ScoreBoard as Join} from './components/socketspectator/ScoreBoard.jsx';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
// If we have a token, consider the user to be signed in
if (token) {
  // we need to update application state
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome} />
        <Route path="signin" component={Signin} />
        <Route path="signout" component={Signout} />
        <Route path="signup" component={Signup} />
        <Route path="login" component={Login} />
        <Route path="feature" component={RequireAuth(Feature)} />
        <Route path="host" component={Host} />
        <Route path="spectator" component={Join} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('#root'));
