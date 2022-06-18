import { devicesRouterInstance } from './axios';
import Device from '../entities/Device';

const getAllDevices = async (): Promise<Device[]> => {
  const { data: device } = await devicesRouterInstance.get('devices/devices');
  return device;
};

const getImageURL = async (path: string) => {
  const { data } = await devicesRouterInstance.post('/commons/commons/images', {
    url: path
  });
  return data;
};

export const getMonitoringDevices = {
  getAllDevices,
  getImageURL
};
