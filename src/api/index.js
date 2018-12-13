import api from './api';

import example from './controllers/example';
import user from './controllers/user';

api.example = example;
api.user = user;

export default api;
