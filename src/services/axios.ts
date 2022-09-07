import axios from 'axios';

export const monitoringPlanRouterInstance = axios.create({
  baseURL: 'https://dev.telemonitoreopalcare.com/api/monitoring-plan'
});

export const authInstance = axios.create({
  baseURL: 'https://dev.telemonitoreopalcare.com/api/auth'
});

export const monitoringRouterInstance = axios.create({
  baseURL: 'https://dev.telemonitoreopalcare.com/api/monitoring'
});

export const devicesRouterInstance = axios.create({
  baseURL: 'https://dev.telemonitoreopalcare.com/api/devices'
});

export const commonsRouterInstance = axios.create({
  baseURL: 'https://dev.telemonitoreopalcare.com/api/commons'
});

export const patientInstance = axios.create({
  baseURL: 'https://dev.telemonitoreopalcare.com/api/patient'
});

// https://dev.telemonitoreopalcare.com/api/
