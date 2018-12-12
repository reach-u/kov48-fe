import * as qs from 'query-string';
import {xorWith} from 'lodash/array';
import * as isLodEmpty from 'lodash/isEmpty';
import * as isEqual from 'lodash/isEqual';

export const isEmpty = obj => isLodEmpty(obj);

export const objectMap = (object, mapFn) => {
  return Object.keys(object).reduce(function(result, key) {
    result[key] = mapFn(object[key]);
    return result;
  }, {});
};

export const formatQueryObject = (qString, paramShouldBeInArray) => {
  const obj = qs.parse(qString);
  let withArrays = obj;

  if (paramShouldBeInArray && paramShouldBeInArray.length > 0) {
    withArrays = Object.keys(obj).reduce(function(result, key) {
      if (paramShouldBeInArray.includes(key) && !Array.isArray(obj[key])) {
        result[key] = [obj[key]];
        return result;
      }
      result[key] = obj[key];
      return result;
    }, {});
  }

  return objectMap(withArrays, field => {
    if ((!Array.isArray(field) && isNaN(field)) || field === null) {
      return field;
    }
    if (Array.isArray(field)) {
      return field.map(elem => {
        if (isNaN(parseInt(elem, 10))) {
          return elem;
        } else return parseInt(elem, 10);
      });
    }
    if (isNaN(parseInt(field, 10))) {
      return field;
    } else {
      return parseInt(field, 10);
    }
  });
};

export const isArrayEqual = (x, y) => {
  return isLodEmpty(xorWith(x, y, isEqual));
};
