import User from '../entities/User';

import { monitoringRouterInstance } from './axios';

const getUsers = async (): Promise<User[]> => {
  const { data: users } = await monitoringRouterInstance.get('auth/users');
  return users;
};

export const authService = {
  getUsers
};
