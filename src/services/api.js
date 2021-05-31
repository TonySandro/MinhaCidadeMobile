import axios from 'axios';

const api = axios.create({
    baseURL:'http://138.0.196.120:5005'
});

export default api