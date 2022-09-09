import express from 'express';
import Tracking from '../entities/Tracking';
import User from '../entities/User';
import { authService } from '../services/auth.service';
import { devicesService } from '../services/devices.service';
import { monitoringService } from '../services/monitoring.service';
import { monitoringPlanService } from '../services/monitoringPlan.service';

const monitoringRouter = express.Router();

monitoringRouter.get('/:patientID', async (req, res) => {
  const patientID = req.params.patientID;
  const type = <string>req.query.type;
  const date = <string>req.query.date;
  try {
    const filters = type || date ? { type, date } : null;
    const users = await authService.getUsers();
    const trackings = await monitoringService.getPatientTrackingById(patientID, filters);

    const getUserName = (userID: string) => {
      const user = users.find((user: User) => user.id === userID);
      if (user) {
        return user.firstname + ' ' + user.lastname;
      }
      return '';
    };

    const trackingWithProfessionalName = trackings.map((track: Tracking) => ({
      ...track,
      professionalName: track.proffesionalId !== '0' ? getUserName(track.proffesionalId) : getUserName(patientID)
    }));

    res.send(trackingWithProfessionalName);
  } catch (error) {
    console.log(error);
  }
});

monitoringRouter.put('/:planId', async (req, res) => {
  try {
    const { planId } = req.params;
    const { measurements:measurementsUpdated } = req.body;
    const measurements = await monitoringPlanService.getMeasurementsByPlanId(planId);
    await monitoringPlanService.updatePlan(req.body);
    await monitoringPlanService.updateAssignedMeasurement(req.body);

    const measurementIds = measurements.filter((item:any) => {
      if(measurementsUpdated.findIndex((measurement:any) => measurement.id === item.MeasurementId) === -1){
        return item;
      } else {
        return false;
      }
    }).map((item:any) => item.MeasurementId);

    if(measurementIds.length > 0){
      const patientIds = await monitoringService.getPatientIdsByPlanId(planId);
      if(patientIds.length > 0){
        const devicesDestroyed = await monitoringService.deleteMonitoringDevices(patientIds, measurementIds);
        await devicesService.updateStockByDeviceIds(devicesDestroyed);
      }
    }

    res.json({
      status: "OK",
    });
  } catch (error) {
    console.log('ERROR');
    res.status(500).send(error);
    console.log(error);
  }
});

export default monitoringRouter;
