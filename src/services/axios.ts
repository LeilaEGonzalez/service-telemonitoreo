import axios from 'axios';

export const monitoringPlanRouterInstance = axios.create({
  baseURL: 'http://localhost:3009'
});

export const authInstance = axios.create({
  baseURL: 'http://localhost:3001'
});

export const monitoringRouterInstance = axios.create({
  baseURL: 'http://localhost:3008'
});

export const devicesRouterInstance = axios.create({
  baseURL: 'http://localhost:3005'
});

export const commonsRouterInstance = axios.create({
  baseURL: 'http://localhost:3009'
});

export const patientInstance = axios.create({
  baseURL: 'http://localhost:3002'
});

// https://dev.telemonitoreopalcare.com/api/
