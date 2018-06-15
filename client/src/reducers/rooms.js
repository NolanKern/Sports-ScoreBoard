import {LIST_ROOMS_SUCCESS} from '../actions/types';

const rooms = (state = null, action) => {
  switch (action.type) {
    case LIST_ROOMS_SUCCESS:
      return action.rooms;
    default:
      return state;
  }
};

export default rooms;