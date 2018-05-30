import {
    CREATE_ROOM,
    CHANGE_ROOM,
    ALTER_DATA,
    ROOM_ERROR
} from '../actions/types';

export default function(state = {}, action) {
switch(action.type) {
    case CREATE_ROOM:
    return { ...state, error: '', room : action.payload };
    case CHANGE_ROOM:
    return { ...state, room : action.payload };
    case ALTER_DATA:
    return { ...state, message: action.payload };
    case ROOM_ERROR:
    return { ...state, error: action.payload };
}

return state;
}