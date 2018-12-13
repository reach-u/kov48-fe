import store from '../store';
import config from '../config';
import {setToastError} from '../store/actions/toastMessage';
import {isEmpty} from '../utils/programUtils';
import {getAuthorizationToken} from '../components/authToken';

const feature = '[Api]';
const baseUrl = config.baseApiUrl;

const api = {
  fetch: async function(url, options) {
    if (baseUrl !== url.substr(0, baseUrl.length)) {
      url = baseUrl + url;
    }

    let headers = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    };

    let authToken = {apikey: getAuthorizationToken()};
    console.log(authToken);

    if (!!authToken.apikey) {
      headers = {...headers, apikey: authToken.apikey};
    }

    options = Object.assign(
      {},
      {
        method: 'get',
        headers: headers,
      },
      options || {}
    );

    options.method = options.method.toLowerCase();

    if (
      options.headers['Content-Type'] === 'application/json' &&
      (options.method === 'post' || options.method === 'put') &&
      options.body !== undefined
    ) {
      options.body = JSON.stringify(options.body);
    }

    if (!window.location.origin) {
      window.location.origin =
        window.location.protocol +
        '//' +
        window.location.hostname +
        (window.location.port ? ':' + window.location.port : '');
    }

    let request = await fetch(`${window.location.origin}/${url}`, options);
    let response = null;
    let throwError = null;
    try {
      let contentType = request.headers.get('Content-Type');
      if (contentType && contentType.indexOf('application/json') !== -1) {
        response = await request.json();
      } else {
        response = await request.text();
      }
      switch (request.status) {
        case 200:
          break;
        case 502:
          store.dispatch(setToastError({message: 'Server offline'}, feature));
          throwError = {
            message: !response || isEmpty(response) ? null : response.toString(),
            status: request.status,
            statusText: request.statusText,
          };
          break;
        case 401:
          store.dispatch(setToastError({message: 'Unauthorized'}, feature));
          throwError = {
            message: !response || isEmpty(response) ? null : response.toString(),
            status: request.status,
            statusText: request.statusText,
          };
          break;
        case 400:
          store.dispatch(setToastError({message: response.message || 'Bad request'}, feature));
          throwError = {
            message: !response || isEmpty(response) ? null : response.toString(),
            status: request.status,
            statusText: request.statusText,
          };
          break;
        default:
          throwError = {
            message: !response || isEmpty(response) ? null : response.toString(),
            status: request.status,
            statusText: request.statusText,
          };
          break;
      }
    } catch (error) {
      throwError = error;
    }

    if (throwError) {
      if (typeof throwError === 'string') {
        throwError = {message: throwError};
      }
      throw throwError;
    }

    return response;
  },

  get: function(url) {
    return this.fetch(url, {method: 'get'});
  },

  post: function(url, data) {
    return this.fetch(url, {method: 'post', body: data});
  },

  put: function(url, data) {
    return this.fetch(url, {method: 'put', body: data});
  },

  delete: function(url, data) {
    return this.fetch(url, {method: 'delete', body: data});
  },

  upload: async function(url, file) {
    if (baseUrl !== url.substr(0, baseUrl.length)) {
      url = baseUrl + url;
    }
    let formData = new FormData();
    formData.append('file', file);
    let request = await fetch(`${window.location.origin}/${url}`, {
      method: 'put',
      body: formData,
    });
    let response = await request.json();
    if (response.status !== 200) {
      store.dispatch(setToastError({message: response.message}, feature));
    }
    return response;
  },
};

export default api;
