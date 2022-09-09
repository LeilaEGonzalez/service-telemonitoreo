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

const getDevicesByIds = async (
  devicesId: string[]
): Promise<Device[]> => {
  const { data: devices } = await devicesRouterInstance.post(
    '/devices/getDevicesByIds',
    { devicesId }
  );
  return devices;
};

interface UpdateStockByDeviceIds {
  deviceId:string,
  quantity:number
}

const updateStockByDeviceIds = async (devices:UpdateStockByDeviceIds): Promise<string> => {
  const { data } = await devicesRouterInstance.put(
    '/stock-device/deviceIds/update',
    { devices }
  );
  return data;
}

export const devicesService = {
  getGroupedDevicesById,
  getDevicesByIds,
  updateStockByDeviceIds
};
