import {SET_LOADER} from '../actions/appLoader';
import {RESET_ALL} from '../constants';

const initialState = {
  isVisible: false,
};

export default function appLoader(state = initialState, action = {}) {
  switch (true) {
    case action.type && action.type.includes(SET_LOADER):
      return {...state, isVisible: action.payload};
    case action.type === RESET_ALL:
      return initialState;
    default:
      return state;
  }
}
