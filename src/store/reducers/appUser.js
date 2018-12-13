import {RESET_ALL} from '../constants';
import {CLEAR_USER, SET_USER} from '../actions/appUser';

const initialState = {
  userData: null,
};

export default function appUser(state = initialState, action = {}) {
  switch (action.type) {
    case SET_USER: {
      return action.payload;
    }
    case CLEAR_USER:
    case RESET_ALL: {
      return initialState;
    }
    default:
      return state;
  }
}
