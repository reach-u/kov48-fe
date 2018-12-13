let authorizationToken = null;
const authorizationTokenName = 'userToken';

export const getAuthorizationToken = () => {
  return authorizationToken || getAuthorizationTokenFromLocalStorage() || null;
};

export const setAuthorizationToken = token => {
  localStorage.setItem(authorizationTokenName, token);
};

export const unsetAuthorizationToken = () => {
  authorizationToken = null;
  localStorage.removeItem(authorizationTokenName);
  document.cookie = `${authorizationTokenName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  document.cookie = `${authorizationTokenName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
};

export const getAuthorizationTokenFromLocalStorage = () => {
  return localStorage.getItem(authorizationTokenName) || null;
};
