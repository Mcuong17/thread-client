import { API_BASE_URL } from "@/utils/constants";
import axios from "axios";


const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
})


axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token')
        if(token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
  (response) => response.data,

  (error) => {
    const data = error.response?.data;

    let message = "Something went wrong";

    if (data?.message) {
      message = data.message;
    }

    if (data?.errors) {
      const key = Object.keys(data.errors)[0];
      message = data.errors[key][0];
    }

    error.errorDesc = message;


    if (error.response?.status === 401) {
      localStorage.removeItem("access_token");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

  
  export default axiosInstance