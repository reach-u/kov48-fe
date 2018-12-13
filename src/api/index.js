import api from './api';

import example from './controllers/example';
import user from './controllers/user';
import children from './controllers/children';
import availableSteps from './controllers/availableSteps';

api.example = example;
api.user = user;
api.children = children;
api.availableSteps = availableSteps;

export default api;
