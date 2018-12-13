import api from '../api';

const benefits = {
    getAvailable: id => api.get(`/support/available/${id}`),
};

export default benefits;