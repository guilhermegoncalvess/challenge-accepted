import axios from 'axios';

const elastic = axios.create({
    baseURL: 'http://localhost:9200/search/'
    
});

export default elastic;