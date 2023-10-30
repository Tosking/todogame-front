import axios from "axios";
const URL  = 'http://localhost:3001';
export const instance = axios.create({
  baseURL: URL,
  timeout: 1000,
  headers: {'X-Custom-Header': 'foobar'}
});

