//types
export const SET_TOAST = 'SET TOAST';
export const SET_TOAST_ERROR = 'SET TOAST ERROR';
export const SET_TOAST_SUCCESS = 'SET TOAST SUCCESS';
export const SET_TOAST_INFO = 'SET TOAST INFO';
export const CLEAR_TOAST = 'CLEAR TOAST';

//creators
export const setToast = (data, feature) => ({
  type: `${feature} ${SET_TOAST}`,
  payload: data,
  meta: {feature},
});
export const setToastError = (data, feature) => ({

  /**
  type: `${feature} ${SET_TOAST_ERROR}`,
  payload: {...data, type: 'danger'},
  meta: {feature},

  **/
});
export const setToastSuccess = (data, feature) => ({
  type: `${feature} ${SET_TOAST_SUCCESS}`,
  payload: {...data, type: 'success'},
  meta: {feature},
});
export const setToastInfo = (data, feature) => ({
  type: `${feature} ${SET_TOAST_INFO}`,
  payload: {...data, type: 'info'},
  meta: {feature},
});
export const clearToast = feature => ({
  type: `${feature} ${CLEAR_TOAST}`,
});

//thunks
export const displayErrorToast = (message, feature) => {
  return async dispatch => {
    dispatch(setToastError({message: message}, feature));
  };
};

export const displayInfoToast = (message, feature) => {
  return async dispatch => {
    dispatch(setToastInfo({message: message}, feature));
  };
};

export const displaySuccessToast = (message, feature) => {
  return async dispatch => {
    dispatch(setToastSuccess({message: message}, feature));
  };
};
