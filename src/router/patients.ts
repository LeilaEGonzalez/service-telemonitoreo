import express from 'express';
import { authService } from '../services/auth.service';
import { monitoringService } from '../services/monitoring.service';
import { patientService } from '../services/patient.service';

const patients = express.Router();

patients.get('/getByDoctorEmail/:doctorEmail', async (req, res) => {
  const doctorEmail = req.params.doctorEmail;
  try {
    const user = await authService.getUserByEmail(doctorEmail);
    if (user) {
      const patientIds = await monitoringService.getPatientsIDsByDoctorID(
        user.id
      );
      const patients = await patientService.getPatientsByIDs(patientIds);
      res.status(200).json(patients);
    }
  } catch (error) {
    console.log(error);
  }
});

export default patients;
