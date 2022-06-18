import express from 'express';
import { monitoringService } from '../services/monitoring.service';
import { devicesService } from '../services/devices.service';
import { getImageURL } from '../services/commons.service';

const monitoringDevices = express.Router();

monitoringDevices.get('/:patientID', async (req, res) => {
  const patientID = req.params.patientID;
  try {
    const devicesID = await monitoringService.getDevicesIdByPatientID(
      patientID
    );
    const groupedDevicesById = await devicesService.getGroupedDevicesById(
      devicesID
    );

    const patientMonitoringImagePromises = groupedDevicesById.map(
      async (device) => {
        const image = await getImageURL(device.image);
        return { ...device, image };
      }
    );

    const patientMonitoringDevices = await Promise.all(
      patientMonitoringImagePromises
    );

    res.status(200).send(patientMonitoringDevices);
  } catch (error) {
    console.log(error);
  }
});

export default monitoringDevices;
