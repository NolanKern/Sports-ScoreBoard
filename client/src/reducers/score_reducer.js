import {
    UPDATE_HOME,
    UPDATE_AWAY
} from '../actions/types';


const initState = {
    homeScore: 0,
    awayScore: 0
}

export default function (state = initState, action) {
    switch (action.type) {
        case UPDATE_HOME:
            return { ...state,
                homeScore: action.payload
            };
        case UPDATE_AWAY:
            return { ...state,
                awayScore: action.payload
            };
        default:
            return state;
    }
}