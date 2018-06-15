import {CLEAR_ERROR} from '../reducers/index';

const clearErrorForCause = cause => {
  return {
    type: CLEAR_ERROR,
    cause,
  };
};

module.exports = clearErrorForCause;