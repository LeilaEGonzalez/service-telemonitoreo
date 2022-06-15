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

export const monitoringPlanService = {
  getTriageIdsByPlanIds,
  getTriagesById
};
