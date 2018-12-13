import api from '../../api';
import {setLoader} from './appLoader';
import {setToastError} from './toastMessage';

//feature
export const USER = '[User]';

//types
export const FETCH_USER = `${USER} FETCH`;
export const SET_USER = `${USER} SET`;
export const CLEAR_USER = `${USER} CLEAR`;

//creators
export const fetchUser = () => ({
  type: FETCH_USER,
});
export const setUser = data => ({
  type: SET_USER,
  payload: data,
});
export const clearUser = () => ({
  type: CLEAR_USER,
});

const guest = {username: null};

//thunks
export const fetchUserInfo = () => {
  return async dispatch => {
    dispatch(fetchUser());
    dispatch(setLoader(true, USER));
    await api.user
      .getuserInfo()
      .then(response => {
        dispatch(setUser(response));
      })
      .catch(error => {
        dispatch(setToastError({message: error.message}, USER));
        dispatch(setUser(guest));
      });
    dispatch(setLoader(false, USER));
  };
};
