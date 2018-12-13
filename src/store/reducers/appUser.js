import {RESET_ALL} from '../constants';
import {CLEAR_USER, SET_USER} from '../actions/appUser';

const initialState = {
  userData: {
    idCode: null,
    firstName: null,
    lastName: null,
    sex: null,
    dateOfBirth: null,
    birthPlace: null,
    address: null,
    phone: null,
  },
};

export default function appUser(state = initialState, action = {}) {
  switch (action.type) {
    case SET_USER: {
      return {userData: action.payload};
    }
    case CLEAR_USER:
    case RESET_ALL: {
      return initialState;
    }
    default:
      return state;
  }
}
