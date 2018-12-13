import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunk from 'redux-thunk';
import toastMessage from './reducers/toastMessage';
import appLoader from './reducers/appLoader';
import appUser from './reducers/appUser';

const rootReducer = combineReducers({
  toastMessage,
  appLoader,
  appUser
});

/**
 * https://github.com/zalmoxisus/redux-devtools-extension
 */

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
