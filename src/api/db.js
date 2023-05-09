import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:3500'
});



// const BASE_URL = "http://localhost:8000/api/";

// export const authApi = axios.create({
//   baseURL: BASE_URL,
//   withCredentials: true,
// });

// authApi.defaults.headers.common["Content-Type"] = "application/json";
