import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import toastMessage from './reducers/toastMessage';
import appLoader from './reducers/appLoader';
import appUser from './reducers/appUser';
import apiKey from './reducers/apiKey';
import childData from './reducers/childData';
import benefits from './reducers/benefitsAvailable';
import availableSteps from './reducers/availableSteps';
import garten from './reducers/garten';
import school from './reducers/school';

const rootReducer = combineReducers({
  toastMessage,
  appLoader,
  appUser,
  apiKey,
  childData,
  benefits,
  availableSteps,
  garten,
  school,
});

/**
 * https://github.com/zalmoxisus/redux-devtools-extension
 */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
