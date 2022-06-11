import MonitoringPatientPlan from '../entities/MonitoringPatientPlan';
import MonitoringPlan from '../entities/MonitoringPlan';
import Tracking from '../entities/Tracking';
import Triage from '../entities/Triage';
import { baseInstance } from './axios';

const getPatientTrackingById = async (
  patientID: string
): Promise<Tracking[]> => {
  const { data: trackings } = await baseInstance.get(
    'monitoring/tracking/patient/' + patientID
  );
  return trackings;
};

const getMonitorintPlanByPatientId = async (
  patientID: string
): Promise<MonitoringPatientPlan[]> => {
  const { data: monitoringPatientPlans } = await baseInstance.get(
    '/monitoring-patient-plan/patient/' + patientID
  );
  return monitoringPatientPlans;
};

const getMonitoringPlanByIds = async (planIds: string): Promise<string[]> => {
  const { data: monitoringPlan } = await baseInstance.get(
    '/monitoring-plans/triageIdsByPlanIds/' + planIds
  );
  return monitoringPlan;
};

const getTriagesById = async (triageIds: string): Promise<Triage[]> => {
  const { data: triage } = await baseInstance.get(
    '/triage/triagesByIds/' + triageIds
  );
  return triage;
};

export const monitoringService = {
  getPatientTrackingById,
  getMonitorintPlanByPatientId,
  getMonitoringPlanByIds,
  getTriagesById
};

// Usuario: gf@acuidado.com
// Clave: Gaby2021
// 9187c7c0-a84c-4409-8872-371f97e2da47 patient
// 58e1e451-2cad-48a7-8a53-7ffb3fa53ef7 doctor
// ba1d4709-7ebf-46c5-98e1-4c4b2c728e68 planid
.map((monitoring) => monitoringPlan.triageId)