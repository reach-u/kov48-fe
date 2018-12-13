import api from '../../api';
import {setLoader} from './appLoader';
import {setToastError} from './toastMessage';

//feature
export const CHILD = '[Child]';

//types
export const FETCH_CHILD = `${CHILD} FETCH`;
export const SET_CHILD = `${CHILD} SET`;
export const CLEAR_CHILD = `${CHILD} CLEAR`;

//creators
export const fetchChild = () => ({
  type: FETCH_CHILD,
});
export const setChild = data => ({
  type: SET_CHILD,
  payload: data,
});
export const clearChild = () => ({
  type: CLEAR_CHILD,
});

//thunks
export const fetchChildData = () => {
  return async dispatch => {
    dispatch(fetchChild());
    dispatch(setLoader(true, CHILD));
    await api.children
      .get()
      .then(response => {
        dispatch(setChild(response[0]));
      })
      .catch(error => {
        dispatch(setToastError({message: error.message}, CHILD));
      });
    dispatch(setLoader(false, CHILD));
  };
};
