import axios from 'axios';

export const baseInstance = axios.create({
  baseURL: 'https://dev.telemonitoreopalcare.com/api/'
});
