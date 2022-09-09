import express, { Request, Response } from 'express';
import { authService } from '../services/auth.service';
import { devicesService } from '../services/devices.service';
import { monitoringService } from '../services/monitoring.service';
import { patientService } from '../services/patient.service';

const patients = express.Router();

patients.get('/getByDoctorEmail/:doctorEmail', async (req, res) => {
  const doctorEmail = req.params.doctorEmail;
  try {
    const user = await authService.getUserByEmail(doctorEmail);
    if(user){
      const patientIds = await monitoringService.getPatientsIDsByDoctorID(
        user.id
      );
      const patients = await patientService.getPatientsByIDs(patientIds);
      res.status(200).json(patients);
    } else {
      throw new Error('User not found');
    }
  } catch (error) {
    console.log(error);
  }
});

patients.get('/:id', async (req:Request, res: Response) => {
  try {
    const { id } = req.params;
    const patient = await patientService.getPatientByID(id);
    const plans = await monitoringService.getMonitoringPlansByPatientId(id);
    const teams = await monitoringService.getMonitoringTeamByPatientId(id);
    const devices = await monitoringService.getDevicesByPatientId(id);
    //measurements segun el plan elegido
    let measurements:any = [];
    let measurementsIds:any = [];
    
    if(plans.length > 0){
      plans.forEach((plan:any) => {
        plan.measurementList.forEach((measurement:any) => {
          if (!measurementsIds.includes(measurement.id)) {
            !measurement.error && (measurement.error = false);
            measurements.push(measurement);
            measurementsIds.push(measurement.id);
          }
        });
      });
    }

    const objDevices:any = {};

    if(devices.length > 0){
      const devicesId = devices.map(device => device.deviceId);
      const devicesData = await devicesService.getDevicesByIds(
        devicesId
      );
      const devicesAllData = devices.map(device => {
        const data = devicesData.find(deviceData => deviceData.id === device.deviceId);
        return {
          ...data,
          measurementId: device.measurementId
        }
      });

      devicesAllData.forEach(device => {
        measurements.forEach((measurement:any) => {
          if (device.measurementId === measurement.measurementId) {
            objDevices[measurement.name] = device;
          }
        })
      });
    }

    res.status(200).json({ ...patient, monitoringPlans: plans, teams, deviceData: objDevices });
  } catch (error) {
    console.log(error);
  }
});

patients.put('/', async (req:Request, res:Response) => {
  const { patientId, userId, newEmail } = req.body;
  try {
    const existEmailPatient = await patientService.existPatientEmail(newEmail);
    const existEmailAuth = await authService.existUserEmail(newEmail);
    if(existEmailPatient || existEmailAuth){
      throw new Error("this email already used")
    } else {
      await patientService.updatePatientEmail(patientId, newEmail);
      await authService.updateUserEmail(userId, newEmail);
      res.status(201).send({
        message: 'Patient Updated'
      })
    }
  } catch (error) {
    if(error instanceof Error){
      res.status(400).send({
        message: error.message
      });
    } else {
      res.status(500).send(error);
    }
  }
});

export default patients;
