//types
export const SET_LOADER = 'SET LOADER';

//creators
export const setLoader = (loaderValue, feature) => ({
  type: `${feature} ${SET_LOADER} ${loaderValue.toString().toUpperCase()}`,
  payload: loaderValue,
  meta: {feature},
});

//thunks
export const setLoaderValue = (value, feature) => {
  return async dispatch => {
    dispatch(setLoader(value, feature));
  };
};
