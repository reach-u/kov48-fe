import {RESET_ALL} from '../constants';
import {CLEAR_KEY, SET_KEY} from '../actions/apiKey';
import {fetchUserInfo} from '../../store/actions/appUser';

const initialState = {
  apiKey: null,
};

export default function appUser(state = initialState, action = {}) {
  switch (action.type) {
    case SET_KEY: {
      return action.payload;
      fetchUserInfo();
    }
    case CLEAR_KEY:
    case RESET_ALL: {
      return initialState;
    }
    default:
      return state;
  }
}
