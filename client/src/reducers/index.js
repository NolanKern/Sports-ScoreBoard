import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth_reducer';
import roomReducer from './room_reducer';
import scoreReducer from './score_reducer';

const rootReducer = combineReducers({
  form,
  auth: authReducer,
  rooms : roomReducer,
  score: scoreReducer
});

export default rootReducer;
