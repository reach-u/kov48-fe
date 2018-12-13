import {RESET_ALL} from '../constants';
import {CLEAR_STEPS, SET_STEPS} from '../actions/availableSteps';

const initialState = {
    steps: []
};

export default function availableSteps(state = initialState, action = {}) {
    switch (action.type) {
        case SET_STEPS: {
            return {steps: action.payload};
        }
        case CLEAR_STEPS:
        case RESET_ALL: {
            return initialState;
        }
        default:
            return state;
    }
}