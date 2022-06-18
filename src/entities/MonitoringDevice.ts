interface MonitoringDevice {
  id: string;
  deviceId: string;
  patientId: string;
  measurementId: string;

  createdAt: Date;
  updatedAt: Date;
}

export default MonitoringDevice;
