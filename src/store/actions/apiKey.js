import api from '../../api';
import {setLoader} from './appLoader';
import {setToastError} from './toastMessage';
import {setAuthorizationToken} from '../../components/authToken';

//feature
export const KEY = '[Key]';

//types
export const FETCH_KEY = `${KEY} FETCH`;
export const SET_KEY = `${KEY} SET`;
export const CLEAR_KEY = `${KEY} CLEAR`;

//creators
export const fetchKey = () => ({
  type: FETCH_KEY,
});
export const setKey = data => ({
  type: SET_KEY,
  payload: data,
});
export const cleaKey = () => ({
  type: CLEAR_KEY,
});

const guest = {username: null};

//thunks
export const login = (code, phone) => {
  return async dispatch => {
    dispatch(fetchKey());
    dispatch(setLoader(true, KEY));
    await api.user
      .login(code, phone)
      .then(response => {
        dispatch(setKey(response));
        console.log(response.apiKey);
        setAuthorizationToken(response.apiKey);
      })
      .catch(error => {
        dispatch(setToastError({message: error.message}, KEY));
        dispatch(setKey(guest));
      });
    dispatch(setLoader(false, KEY));
  };
};
