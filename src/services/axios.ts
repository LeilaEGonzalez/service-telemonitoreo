import axios from 'axios';

export const monitoringPlanRouterInstance = axios.create({
  baseURL: 'http://localhost:3009'
});

export const monitoringRouterInstance = axios.create({
  baseURL: 'http://localhost:3008'
});
