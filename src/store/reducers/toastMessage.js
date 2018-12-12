import {CLEAR_TOAST, SET_TOAST} from '../actions/toastMessage';
import {RESET_ALL} from '../constants';

const initialState = {
  message: null,
  statusCode: null,
  type: 'default',
};

export default function toastMessage(state = initialState, action = {}) {
  switch (true) {
    case action.type && action.type.includes(SET_TOAST):
      return {...state, ...action.payload};
    case action.type && action.type.includes(CLEAR_TOAST):
    case action.type === RESET_ALL:
      return initialState;
    default:
      return state;
  }
}
