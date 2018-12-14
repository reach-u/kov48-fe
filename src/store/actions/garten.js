import api from '../../api';
import {setLoader} from './appLoader';
import {setToastError} from './toastMessage';

//feature
export const GARTEN = '[Garten]';

//types
export const FETCH_GARTEN = `${GARTEN} FETCH`;
export const SET_GARTEN = `${GARTEN} SET`;
export const CLEAR_GARTEN = `${GARTEN} CLEAR`;

//creators
export const fetchGarten = () => ({
    type: FETCH_GARTEN,
});
export const setGarten = data => ({
    type: SET_GARTEN,
    payload: data,
});
export const clearGarten = () => ({
    type: CLEAR_GARTEN,
});

const guest = {username: null};

//thunks
export const fetchAvailableGartens = () => {
    return async dispatch => {
        dispatch(fetchGarten());
        dispatch(setLoader(true, GARTEN));
        await api.garten
            .get()
            .then(response => {
                dispatch(setGarten(response));
            })
            .catch(error => {
                dispatch(setToastError({message: error.message}, GARTEN));
                dispatch(setGarten(guest));
            });
        dispatch(setLoader(false, GARTEN));
    };
};