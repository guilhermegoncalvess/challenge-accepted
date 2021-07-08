import axios from 'axios';

const elastic = axios.create({
    baseURL: process.env.ELASTIC_URL
});

export default elastic;