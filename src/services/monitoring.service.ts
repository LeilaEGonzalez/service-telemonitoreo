import MonitoringDevice from '../entities/MonitoringDevice';
import Tracking from '../entities/Tracking';
import { monitoringRouterInstance } from './axios';

const getPatientTrackingById = async (
  patientID: string,
  filters: { type: string | undefined, date: string } | null
): Promise<Tracking[]> => {
  const { data: trackings } = await monitoringRouterInstance.get(
    '/tracking/patient/' + patientID, { params:filters }
  );
  return trackings;
};

const getPatientsTrackings = async (tracking: string): Promise<Tracking[]> => {
  const { data: trackings } = await monitoringRouterInstance.get(
    '/tracking/' + tracking
  );
  return trackings;
};

const getPatientsIDsByDoctorID = async (
  doctorID: string
): Promise<string[]> => {
  const { data: patientsId } = await monitoringRouterInstance.get(
    '/tracking/patientIDsByProffesionalID/' + doctorID
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

const getMonitoringPlansByPatientId = async (patientId:string) : Promise<any> => {
  const { data:monitoringPlans } = await monitoringRouterInstance.get(`/monitoring-patient-plan/patient/${patientId}`);
  return monitoringPlans;
}

const getMonitoringTeamByPatientId = async (patientId:string) : Promise<any> => {
  const { data:monitoringTeam } = await monitoringRouterInstance.get(`/monitoring-teams/${patientId}`);
  return monitoringTeam;
}

const getDevicesByPatientId = async (patientId:string) : Promise<MonitoringDevice[]> => {
  const { data:devices } = await monitoringRouterInstance.get(`/monitoring-devices/patient/${patientId}`);
  return devices;
}

const getPatientIdsByPlanId = async (planId:string)  => {
  const { data:patientIds } = await monitoringRouterInstance.get(`/monitoring-patient-plan/${planId}/patientIds`);
  return patientIds;
}

const deleteMonitoringDevices = async (patientIds:string[], measurementIds:string[]) => {
  const { data:devices } = await monitoringRouterInstance.delete(`/monitoring-devices/`,{
    data:{
      patientIds,
      measurementIds
    }
  });
  return devices;
}

export const monitoringService = {
  getPatientTrackingById,
  getPatientsTrackings,
  getPlanMonitoringPlanIdsByPatientId,
  getDevicesIdByPatientID,
  getPatientsIDsByDoctorID,
  getMonitoringPlansByPatientId,
  getMonitoringTeamByPatientId,
  getDevicesByPatientId,
  getPatientIdsByPlanId,
  deleteMonitoringDevices
};
