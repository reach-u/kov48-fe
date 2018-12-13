import api from './api';

import example from './controllers/example';
import user from './controllers/user';
import children from './controllers/children';
import availableSteps from './controllers/availableSteps';
import benefits from './controllers/benefits';

api.example = example;
api.user = user;
api.children = children;
api.availableSteps = availableSteps;
api.benefits=benefits;

export default api;
