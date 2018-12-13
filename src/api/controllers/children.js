import api from '../api';

const children = {
  get: () => api.get('/child/find'),
};

export default children;
