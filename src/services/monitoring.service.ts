import Tracking from '../entities/Tracking';
import { monitoringRouterInstance } from './axios';

const getPatientTrackingById = async (
  patientID: string
): Promise<Tracking[]> => {
  const { data: trackings } = await monitoringRouterInstance.get(
    'tracking/patient/' + patientID
  );
  return trackings;
};

const getPatientsTrackings = async (tracking: string): Promise<Tracking[]> => {
  const { data: trackings } = await monitoringRouterInstance.get(
    'tracking/' + tracking
  );
  return trackings;
};

const getPatientsIDsByDoctorID = async (
  doctorID: string
): Promise<string[]> => {
  const { data: patientsId } = await monitoringRouterInstance.get(
    'tracking/patientIDsByProffesionalID/' + doctorID
  );
  return patientsId;
};

const getPlanMonitoringPlanIdsByPatientId = async (
  patientID: string
): Promise<string[]> => {
  const { data: plansId } = await monitoringRouterInstance.get(
    '/monitoring-patient-plan/plansId/' + patientID
  );
  return plansId;
};

const getDevicesIdByPatientID = async (
  patientID: string
): Promise<string[]> => {
  const { data: devicesId } = await monitoringRouterInstance.get(
    '/monitoring-devices/deviceIdByPatientID/' + patientID
  );
  return devicesId;
};

export const monitoringService = {
  getPatientTrackingById,
  getPatientsTrackings,
  getPlanMonitoringPlanIdsByPatientId,
  getDevicesIdByPatientID,
  getPatientsIDsByDoctorID
};
