import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import 'typeface-roboto';
import App from './App';
import store from './store';
import './index.css';
import ErrorBoundary from './components/errorBoundary';

render(
    <Provider store={store}>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </Provider>,
    document.getElementById('root')
);

registerServiceWorker();
