import api from '../../api';
import {setLoader} from './appLoader';
import {setToastError} from './toastMessage';

//feature
export const BENEFITS = '[BENEFITS]';

//types
export const FETCH_BENEFITS = `${BENEFITS} FETCH`;
export const SET_BENEFITS = `${BENEFITS} SET`;
export const CLEAR_BENEFITS = `${BENEFITS} CLEAR`;

//creators
export const fetchBenefits = () => ({
    type: FETCH_BENEFITS,
});
export const setBenefits = data => ({
    type: SET_BENEFITS,
    payload: data,
});
export const clearBenefits = () => ({
    type: CLEAR_BENEFITS,
});

//thunks
export const fetchBenefitsData = (id) => {
    return async dispatch => {
        dispatch(fetchBenefits());
        dispatch(setLoader(true, BENEFITS));
        await api.benefits.getAvailable(id)
            .get()
            .then(response => {
                dispatch(setBenefits(response));
            })
            .catch(error => {
                dispatch(setToastError({message: error.message}, BENEFITS));
            });
        dispatch(setLoader(false, BENEFITS));
    };
};