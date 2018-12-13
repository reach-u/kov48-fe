import api from './api';

import example from './controllers/example';
import user from './controllers/user';
import children from './controllers/children';

api.example = example;
api.user = user;
api.children = children;

export default api;
