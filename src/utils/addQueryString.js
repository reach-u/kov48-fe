export const addQueryString = (string, data) => {
  if (!data || data.length === 0) return string;

  let queryString = '?';
  Object.keys(data).forEach(key => {
    if (Array.isArray(data[key])) {
      data[key].forEach(val => {
        if (val) {
          queryString = queryString.concat(key + '=' + val + '&');
        }
      });
    } else {
      if (data[key] || data[key] === 0) {
        queryString = queryString.concat(key + '=' + data[key] + '&');
      }
    }
  });

  return string.concat(queryString.slice(0, -1));
};
