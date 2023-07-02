import axios from 'axios';
import { getToken } from '../utils/cache';

const headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

const url = 'http://localhost:3000/';
export const apiCall = async (endpoint, method, data) => {
  const token = await getToken();

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }
  axios.defaults.headers = headers;
  return await axios[method](`${url}${endpoint}`, data).then((res) => res);
};
