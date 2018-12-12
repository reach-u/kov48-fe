import React from 'react';
import Loadable from 'react-loadable';
import store from '../store';
import {setLoader} from '../store/actions/appLoader';

const feature = '[Module loader]';
let isLoading = false;

const pageLoader = options => {
  return Loadable({
    loader: options.component,
    loading: props => {
      if (props.error && isLoading) {
        isLoading = false;
        store.dispatch(setLoader(false, feature));
      } else if (!isLoading) {
        isLoading = true;
        store.dispatch(setLoader(true, feature));
      }
      return null;
    },
    render(loaded, props) {
      let Component = loaded.default;
      setTimeout(() => {
        if (isLoading) {
          isLoading = false;
          store.dispatch(setLoader(false, feature));
        }
      }, 20);
      return <Component {...props} />;
    },
  });
};

export default pageLoader;
