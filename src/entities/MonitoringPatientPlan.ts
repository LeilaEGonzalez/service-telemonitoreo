interface MonitoringPatientPlan {
  id: string;
  name: string;
  planId: string;
  palcareApp: string;
  tracking: string;
  monitoringTerm: string;
  revisionDate: string;
  initialDate: string;
  time1: string;
  time2: string;
  time3: string;
  interview: string;
  patientId: string;

  createdAt: Date;
  updatedAt: Date;
}

export default MonitoringPatientPlan;
