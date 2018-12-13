import api from '../api';

const user = {
  login: (code, phone) => api.get(`login/${code}/${phone}`),
};

export default user;
