import axios from "axios";

export const accountAxios = axios.create({
  baseURL: "http://localhost:8080/mysalary/api/v1/account",
  timeout: 5000,
});

export const debitAxios = axios.create({
  baseURL: "http://localhost:8080/mysalary/api/v1/account",
  timeout: 5000,
});
