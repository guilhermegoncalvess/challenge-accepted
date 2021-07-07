import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:9200/search'
})

export default api;