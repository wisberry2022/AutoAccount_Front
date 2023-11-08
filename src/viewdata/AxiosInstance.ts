import axios from "axios";

export const axiosInstance = axios.create({
  // baseURL: "http://localhost:8080/mysalary",
  baseURL: process.env.REACT_APP_API_URL,
  timeout: 5000,
});

