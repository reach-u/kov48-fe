import api from '../api';

const availableSteps = {
  get: (childIdCode) => api.get(`/available_steps/${childIdCode}`),
};

export default availableSteps;
