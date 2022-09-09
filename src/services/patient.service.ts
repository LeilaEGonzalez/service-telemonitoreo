import Patient from '../entities/Patient';
import { patientInstance } from './axios';

const getPatientsByIDs = async (patientIds: string[]): Promise<Patient[]> => {
  const { data: plansId } = await patientInstance.post(
    '/patients/getPatientsByIds',
    { patientIds }
  );
  return plansId;
};

const getPatientByID = async (id:string): Promise<Patient> => {
  const { data:patient } = await patientInstance.get(`/patients/${id}`);
  return patient;
}

const existPatientEmail = async (mainMail:string): Promise<boolean> => {
  const { data } = await patientInstance.post(`/patients/exist-email`, { mainMail });
  return data;
}

const updatePatientEmail = async (id:string, mainMail:string):Promise<void> => {
  const { data } = await patientInstance.put(`/patients/${id}/update-email`, { mainMail });
  return data;
}

export const patientService = { getPatientsByIDs, getPatientByID, existPatientEmail, updatePatientEmail };
