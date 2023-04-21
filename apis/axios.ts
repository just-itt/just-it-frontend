import axios from "axios";
import Cookies from "js-cookie";

const ax = axios.create({ baseURL: process.env.NEXT_PUBLIC_BASE_URL });

ax.interceptors.request.use(function (config) {
  const token = Cookies.get("auth");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default ax;
