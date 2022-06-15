import express from 'express';
import { monitoringService } from '../services/monitoring.service';
import { monitoringPlanService } from '../services/monitoringPlan.service';

const triageRouter = express.Router();

triageRouter.get('/:patientID', async (req, res) => {
  const patientID = req.params.patientID;
  try {
    const plansIds =
      await monitoringService.getPlanMonitoringPlanIdsByPatientId(patientID);
    const triageIds = await monitoringPlanService.getTriageIdsByPlanIds(
      plansIds
    );
    const triagesByIDs = await monitoringPlanService.getTriagesById(triageIds);

    res.status(200).send(triagesByIDs);
  } catch (error) {
    console.log(error);
  }
});

export default triageRouter;
