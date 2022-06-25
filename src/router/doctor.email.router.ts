import express from 'express';
import Tracking from '../entities/Tracking';
import User from '../entities/User';
import { authService } from '../services/auth.service';
import { monitoringService } from '../services/monitoring.service';

const getPatientsByDoctorsEmail = express.Router();

getPatientsByDoctorsEmail.get('/', async (req, res) => {
  const tracking = req.body.tracking;
  try {
    const users = await authService.getUsers();
    const trackings = await monitoringService.getPatientsTrackings(tracking);

    const getUserID = (userEmail: string) => {
      const user = users.find((user: User) => user.email === userEmail);
      if (user) {
        return user.id;
      }
      return '';
    };

    const patientsByDoctorEmail = (track: Tracking) => {
      const professionalID = trackings.map(() => )
    };

    res.send(patientsByDoctorEmail);
  } catch (error) {
    console.log(error);
  }
});

export default getPatientsByDoctorsEmail;
