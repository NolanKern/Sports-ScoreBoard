import axios from 'axios';
import { browserHistory } from 'react-router';
import {
  AUTH_USER,
  UNAUTH_USER,
  AUTH_ERROR,
  FETCH_MESSAGE,
  CREATE_ROOM,
  UPDATE_HOME,
  UPDATE_AWAY,
  UPDATE_MINUTES, 
  UPDATE_SECONDS
} from './types';
import ScoreBoard from '../components/SocketSpectator/ScoreBoard';

const ROOT_URL = 'http://localhost:3090';

export function signinUser({ email, password }) {
  return function(dispatch) {
    // Submit email/password to the server
    axios.post(`${ROOT_URL}/signin`, { email, password })
      .then(response => {
        // If request is good...
        // - Update state to indicate user is authenticated
        dispatch({ type: AUTH_USER });
        // - Save the JWT token
        localStorage.setItem('token', response.data.token);
        // - redirect to the route '/feature'
        browserHistory.push('/feature');
      })
      .catch(() => {
        // If request is bad...
        // - Show an error to the user
        dispatch(authError('Bad Login Info'));
      });
  }
}

export function signupUser({ email, password }) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/signup`, { email, password })
      .then(response => {
        dispatch({ type: AUTH_USER });
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/feature');
      })
      .catch(response => dispatch(authError(response.data.error)));
  }
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}

export function signoutUser() {
  localStorage.removeItem('token');

  return { type: UNAUTH_USER };
}

export function fetchMessage() {
  return function(dispatch) {
    axios.get(ROOT_URL, {
      headers: { authorization: localStorage.getItem('token') }
    })
      .then(response => {
        dispatch({
          type: FETCH_MESSAGE,
          payload: response.data.message
        });
      });
  }
}
export function updateHome(score) {
  return {
    type: UPDATE_HOME,
    payload: score
  }
}

export function updateAway(score) {
  return {
    type: UPDATE_AWAY,
    payload: score
  }
}
export function updateMinutes(m) {
  return {
    type: UPDATE_MINUTES,
    payload: m
  }
}

export function updateSeconds(s) {
  return {
    type: UPDATE_SECONDS,
    payload: s
  }
}



// export function createRoom({roomName}){
//   return function(dispatch) {
//     axios.post(`${ROOT_URL}/rooms`, { roomName })
//       .then(response => {
//         dispatch({ type: CREATE_ROOM });
//         browserHistory.push('/rooms/'+ roomName);
//       })
//       .catch(response => dispatch(roomError(response.data.error)));
//   }
// }

// export function changeRoom({roomName}){
//   return function(dispatch) {
//     axios.post(`${ROOT_URL}/rooms`, { roomName })
//       .then(response => {
//         dispatch({ type: CREATE_ROOM });
//         browserHistory.push('/rooms/'+ roomName);
//       })
//       .catch(response => dispatch(roomError(response.data.error)));
//   }
// }
// // ask about best way to do this
// export function alterData(){

// }