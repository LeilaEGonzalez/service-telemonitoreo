import express from 'express';
import { monitoringService } from '../services/monitoring.service';

const triageRouter = express.Router();

triageRouter.get('/:patientID', async (req, res) => {
  const patientID = req.params.patientID;
  const monitoringPlanIDs = await monitoringService.getMonitoringPlanByIds(
    patientID
  );
  const triagesByIDs = await monitoringService.getTriagesById(
    monitoringPlanIDs
  );

  res.status(200).send(triagesByIDs);
});

export default triageRouter;
