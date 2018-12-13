import api from '../api';

const confirmFather = {
  get: (childIdCode) => api.get(`child/confirm_father/${childIdCode}`)
};

export default confirmFather;
