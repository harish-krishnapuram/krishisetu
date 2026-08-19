import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json"
  }
});

// Axios Interceptor for injecting JWT Bearer Token into requests
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("ks_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor for handling token expiration
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("ks_token");
      localStorage.removeItem("ks_user");
    }
    return Promise.reject(error);
  }
);

export default apiClient;
