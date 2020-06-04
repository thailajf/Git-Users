import axios from 'axios';

const api = axios.create({
  baseURL: 'https://ancient-beach-79651.herokuapp.com/',
});

export default api;
