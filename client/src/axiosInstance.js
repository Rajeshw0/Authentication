import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5000', // Replace with your backend URL
  timeout: 5000, // Timeout duration in milliseconds (optional)
  headers: {
    'Content-Type': 'application/json'
  },
});

export default axiosInstance;