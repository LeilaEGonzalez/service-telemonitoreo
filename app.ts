import express from 'express';
import { json } from 'body-parser';
import cors from 'cors';

import monitoringRouter from './src/router/monitoring.router';
import triageRouter from './src/router/triage.router';
import monitoringDevices from './src/router/devices.router';
import getPatientsByDoctorsEmail from './src/router/doctor.email.router';

require('axios');

export const app = express();
app.set('trust proxy', true);
app.use(json());
app.use(cors());
app.use('/monitoring', monitoringRouter);
app.use('/triage', triageRouter);
app.use('/monitoring-device', monitoringDevices);
app.use('/doctor-email', getPatientsByDoctorsEmail);

app.listen(3000, () => {
  console.log('Listening on port 3000!');
});
