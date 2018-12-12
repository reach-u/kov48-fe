import api from '../api';
import {addQueryString} from '../../utils/addQueryString';

const blocking = {
    getData: () => api.get('/data'),
    getDataByFilterPost: filter => api.post(addQueryString('/data/search', filter), filter),
    saveData: data => api.post('/data', data),
    updateData: (data, id) => api.put(`/data/${id}`, data),
    removeData: id => api.delete(`/data/${id}`),
};

export default blocking;