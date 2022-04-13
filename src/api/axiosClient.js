import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'https://api-fake-todo.herokuapp.com/api',

  headers: {
    'Content-Type': 'application/json',
    
  },
});

export default axiosClient;
