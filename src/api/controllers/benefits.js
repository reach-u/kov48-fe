import api from '../api';

const benefits = {
    getAvailable: id => api.get(`support/available/${id}`),
    applyForSupport : (id,data) => api.post(`support/apply/${id}`, data),
};

export default benefits;