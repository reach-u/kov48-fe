import {RESET_ALL} from '../constants';
import {CLEAR_BENEFITS, SET_BENEFITS} from '../actions/benefitsAvailable';

const initialState = {
    benefits: []
};

export default function benefits(state = initialState, action = {}) {
    switch (action.type) {
        case SET_BENEFITS: {
            return {benefits: action.payload};
        }
        case CLEAR_BENEFITS:
        case RESET_ALL: {
            return initialState;
        }
        default:
            return state;
    }
}