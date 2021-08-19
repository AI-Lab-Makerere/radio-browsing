import axios from 'axios';

import { API_URL } from './config';

export const API = axios.create({
  baseURL: API_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  },
});

export const authenticate = (data, next) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('user', JSON.stringify(data));
    next();
  }
};
