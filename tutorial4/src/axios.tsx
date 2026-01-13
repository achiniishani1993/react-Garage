import axios from "axios";

export const jsonPlaceholderAPI = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const dummyJsonAPI = axios.create({
  baseURL: "https://dummyjson.com",
});