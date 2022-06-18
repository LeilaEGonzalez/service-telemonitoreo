import express from 'express';
import { monitoringService } from '../services/monitoring.service';
import { getMonitoringDevices } from '../services/monitoringDevice.service';

const monitoringDevices = express.Router();

monitoringDevices.get('/:patientID', async (req, res) => {
  try {
    const devicesFromPatientMonitorings =
      await monitoringService.getPatientDevices(req.params.patientID);
    const allDevices = await getMonitoringDevices.getAllDevices();
    const deviceImage = await getMonitoringDevices.getImageURL(req.body.data);

    const devicesTypeIDS = [] as any;

    res.status(200).send();
  } catch (error) {
    console.log(error);
  }
});

export default monitoringDevices;
