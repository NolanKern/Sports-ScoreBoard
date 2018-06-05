import {
    MINUTES,
    SECONDS
} from '../actions/types';

const initState = {
    minutes: 20,
    seconds: 0,
}

export default function (state = initState, action) {
    switch (action.type) {
        case UPDATE_MINUTES:
            return { ...state,
                minutes: action.payload
            };
        case UPDATE_SECONDS:
            return { ...state,
                seconds: action.payload
            };
        default:
            return state;
    }
}