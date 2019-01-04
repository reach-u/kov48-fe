import api from '../api';

const children = {
  get: () => api.get('child/find'),
  confirm: id => api.get(`child/confirm_father/${id}`),
};

export default children;
