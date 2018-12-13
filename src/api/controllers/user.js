import api from '../api';

const user = {
  login: (code, phone) => api.get(`login/${code}/${phone}`),
  getuserInfo: () => api.get(`active_user`),
};

export default user;
