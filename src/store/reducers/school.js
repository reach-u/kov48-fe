import {RESET_ALL} from '../constants';
import {CLEAR_SCHOOL, SET_SCHOOL} from '../actions/school';

const initialState ='-';

export default function school(state = initialState, action = {}) {
    switch (action.type) {
        case SET_SCHOOL: {
            return  action.payload;
        }
        case CLEAR_SCHOOL:
        case RESET_ALL: {
            return initialState;
        }
        default:
            return state;
    }
}
