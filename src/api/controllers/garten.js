import api from '../api';

const garten = {
    get: () => api.get('kindergarten/find'),

};

export default garten;