import Triage from '../entities/Triage';
import { monitoringPlanRouterInstance } from './axios';

const getTriageIdsByPlanIds = async (planIds: string[]): Promise<string[]> => {
  const { data: triageIds } = await monitoringPlanRouterInstance.post(
    '/monitoring-plans/triageIdsByPlanIds/',
    { planIds }
  );
  return triageIds;
};

const getTriagesById = async (triageIds: string[]): Promise<Triage[]> => {
  const { data: triage } = await monitoringPlanRouterInstance.post(
    '/triage/triagesByIds/',
    {
      triageIds
    }
  );
  return triage;
};

const getMeasurementsByPlanId = async (planId:string) => {
  const { data: measurements } = await monitoringPlanRouterInstance.get(
    `/monitoringPlanMeasurement/${planId}/measurements`,
  );
  return measurements;
}

const updatePlan = async (plan:any) => {
  const { data } = await monitoringPlanRouterInstance
    .put(`/monitoring-plans`, plan);
  return data;
}

const updateAssignedMeasurement = async (data:any) => {
  const response = await monitoringPlanRouterInstance
    .put(
      `/monitoringPlanMeasurement/${data.id}/measurement/`,
      { ...data }
    );
  return response.data;
};

export const monitoringPlanService = {
  getTriageIdsByPlanIds,
  getTriagesById,
  getMeasurementsByPlanId,
  updatePlan,
  updateAssignedMeasurement
};
