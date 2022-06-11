interface MonitoringPlan {
  id: string;
  name: string;
  status: string;
  public: boolean;
  triageId: string;

  readonly createdAt: Date;
  readonly updatedAt: Date;
}

export default MonitoringPlan;
