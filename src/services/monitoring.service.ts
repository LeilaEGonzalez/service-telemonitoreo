import Tracking from '../entities/Tracking';
import { monitoringRouterInstance } from './axios';

const getPatientTrackingById = async (
  patientID: string
): Promise<Tracking[]> => {
  const { data: trackings } = await monitoringRouterInstance.get(
    'monitoring/tracking/patient/' + patientID
  );
  return trackings;
};

const getPlanMonitoringPlanIdsByPatientId = async (
  patientID: string
): Promise<string[]> => {
  const { data: plansId } = await monitoringRouterInstance.get(
    '/monitoring-patient-plan/plansId/' + patientID
  );
  return plansId;
};

export const monitoringService = {
  getPatientTrackingById,
  getPlanMonitoringPlanIdsByPatientId
};

// Usuario: gf@acuidado.com
// Clave: Gaby2021
// 9187c7c0-a84c-4409-8872-371f97e2da47 patient
// 58e1e451-2cad-48a7-8a53-7ffb3fa53ef7 doctor
// ba1d4709-7ebf-46c5-98e1-4c4b2c728e68 planid
