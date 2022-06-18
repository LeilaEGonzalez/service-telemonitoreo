interface Device {
  id: string;
  name: string;
  model: string;
  code: string;
  deviceTypeId: string;
  image: string;
  status: string;

  createdAt: Date;
  updatedAt: Date;
}

export default Device;
