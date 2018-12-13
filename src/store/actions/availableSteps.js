import api from '../../api';
import {setLoader} from './appLoader';
import {setToastError} from './toastMessage';

//feature
export const STEPS = '[STEPS]';

//types
export const FETCH_STEPS = `${STEPS} FETCH`;
export const SET_STEPS = `${STEPS} SET`;
export const CLEAR_STEPS = `${STEPS} CLEAR`;

//creators
export const fetchSteps = () => ({
    type: FETCH_STEPS,
});
export const setSteps = data => ({
    type: SET_STEPS,
    payload: data,
});
export const clearSteps = () => ({
    type: CLEAR_STEPS,
});

//thunks
export const fetchStepsData = (id) => {
    return async dispatch => {
        dispatch(fetchSteps());
        dispatch(setLoader(true, STEPS));
        await api.availableSteps.get(id)
            .then(response => {
                dispatch(setSteps(response));
            })
            .catch(error => {
                dispatch(setToastError({message: error.message}, STEPS));
            });
        dispatch(setLoader(false, STEPS));
    };
};