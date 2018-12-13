import {RESET_ALL} from '../constants';
import {CLEAR_CHILD, SET_CHILD} from '../actions/childData';

const initialState = {
  childData: {
    idCode: null,
    firstName: null,
    lastName: null,
    sex: null,
    dateOfBirth: null,
    birthPlace: null,
    address: null,
    phone: 0,
    mother: null,
    father: null,
    fatherConfirmed: false,
  },
};

export default function childData(state = initialState, action = {}) {
  switch (action.type) {
    case SET_CHILD: {
      return {childData: action.payload};
    }
    case CLEAR_CHILD:
    case RESET_ALL: {
      return initialState;
    }
    default:
      return state;
  }
}
