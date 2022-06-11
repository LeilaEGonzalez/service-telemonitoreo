import express from 'express';
import Tracking from '../entities/Tracking';
import User from '../entities/User';
import { authService } from '../services/auth.service';
import { monitoringService } from '../services/monitoring.service';

const monitoringRouter = express.Router();

monitoringRouter.get('/:patientID', async (req, res) => {
  const patientID = req.params.patientID;
  try {
    const users = await authService.getUsers();
    const trackings = await monitoringService.getPatientTrackingById(patientID);

    const getUserName = (userID: string) => {
      const user = users.find((user: User) => user.id === userID);
      if (user) {
        return user.firstname + ' ' + user.lastname;
      }
      return '';
    };

    const trackingWithProfessionalName = trackings.map((track: Tracking) => ({
      ...track,
      professionalName: getUserName(track.proffesionalId)
    }));

    res.send(trackingWithProfessionalName);
  } catch (error) {
    console.log(error);
  }
});

export default monitoringRouter;
