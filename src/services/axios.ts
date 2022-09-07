import axios from 'axios';

export const monitoringPlanRouterInstance = axios.create({
  baseURL: 'https://orchestrator-service-development.up.railway.app'
});

export const authInstance = axios.create({
  baseURL: 'https://orchestrator-service-development.up.railway.app'
});

export const monitoringRouterInstance = axios.create({
  baseURL: 'https://orchestrator-service-development.up.railway.app'
});

export const devicesRouterInstance = axios.create({
  baseURL: 'https://orchestrator-service-development.up.railway.app'
});

export const commonsRouterInstance = axios.create({
  baseURL: 'https://orchestrator-service-development.up.railway.app'
});

export const patientInstance = axios.create({
  baseURL: 'https://orchestrator-service-development.up.railway.app'
});

// https://dev.telemonitoreopalcare.com/api/
