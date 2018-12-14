import {RESET_ALL} from '../constants';
import {CLEAR_GARTEN, SET_GARTEN} from '../actions/garten';

const initialState = {
  gartens: [],
};

export default function garten(state = initialState, action = {}) {
  switch (action.type) {
    case SET_GARTEN: {
      return {gartens: action.payload};
    }
    case CLEAR_GARTEN:
    case RESET_ALL: {
      return initialState;
    }
    default:
      return state;
  }
}

/**
 *   {
    "name": "Midrimaa",
    "crd": {
      "lat": 58.385284,
      "lon": 26.719494
    },
    "distance": 0,
    "capacity": 500,
    "waiting": 21
  },
 **/