import { devicesRouterInstance } from './axios';
import Device from '../entities/Device';

const getGroupedDevicesById = async (
  devicesId: string[]
): Promise<Device[]> => {
  const { data: devices } = await devicesRouterInstance.post(
    '/devices/groupedDevicesById',
    { devicesId }
  );
  return devices;
};
export const devicesService = {
  getGroupedDevicesById
};
