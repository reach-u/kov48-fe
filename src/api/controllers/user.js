import api from '../api';

const user = {
  login: (code, phone) => api.get(`localhost:8080/api/1/login/${code}/${phone}`),
};

export default user;
