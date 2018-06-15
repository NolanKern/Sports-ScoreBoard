import {
    SET_ATTEMPTED_ROOM,
    CLEAR_ATTEMPTED_ROOM,
    JOIN_ROOM_SUCCESS,
  } from '../actions/types';
  
  const attemptedRoom = (state = null, action) => {
    switch (action.type) {
      case CLEAR_ATTEMPTED_ROOM:
      case JOIN_ROOM_SUCCESS:
        return null;
      case SET_ATTEMPTED_ROOM:
        return action.roomId;
      default:
        return state;
    }
  };
  
  module.exports = attemptedRoom;
  