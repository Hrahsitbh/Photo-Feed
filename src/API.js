import axios from 'axios';

const API = axios.create({
    baseURL: 'https://api.unsplash.com/photos',
    header: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
       'X-Ratelimit-Limit': 1000
    },
    params: {
      client_id: process.env.REACT_APP_UNSPLASH_API_KEY
    }
});

export default API;
