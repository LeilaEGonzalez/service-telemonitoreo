import Patient from '../entities/Patient';
import { patientInstance } from './axios';

const getPatientsByIDs = async (patientIds: string[]): Promise<Patient[]> => {
  const { data: plansId } = await patientInstance.post(
    '/patients/getPatientsByIds',
    { patientIds }
  );
  return plansId;
};

export const patientService = { getPatientsByIDs };
