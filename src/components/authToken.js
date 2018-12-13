let authorizationToken = null;
const authorizationTokenName = 'userToken';

export const getAuthorizationToken = () => {
  return (
    authorizationToken ||
    getAuthorizationTokenFromCookie() ||
    getAuthorizationTokenFromLocalStorage() ||
    null
  );
};

export const setAuthorizationToken = (token, rememberMyLogin = true) => {
  document.cookie = `${authorizationTokenName}=${authorizationToken}; path=/;`;
  if (rememberMyLogin) {
    localStorage.setItem(authorizationTokenName, authorizationToken);
  }
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

const getAuthorizationTokenFromCookie = () => {
  let token = null;
  let tokenName = `${authorizationTokenName}=`;
  document.cookie.split('; ').forEach(cookie_item => {
    if (tokenName === cookie_item.substr(0, tokenName.length)) {
      token = cookie_item.substr(tokenName.length) || null;
    }
  });
  return token;
};
