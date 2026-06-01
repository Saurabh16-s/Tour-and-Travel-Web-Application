import axios from "axios";

const API = axios.create({
  baseURL: "http://13.127.212.231/api"
});


API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");


  if (token && token !== "null" && token !== "undefined" && token.trim() !== "") {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default API;