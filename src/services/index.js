import axios from 'axios';
import { AUTH_API_BASE_URL } from '../constants';

//create axios for server call and headers
const instance = axios.create({
  baseURL: AUTH_API_BASE_URL
});

// Add a request interceptor
instance.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);

// Add a response interceptor for globale notifications and responce log
instance.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {        
    return Promise.reject(error);
  }
);

export default instance;
