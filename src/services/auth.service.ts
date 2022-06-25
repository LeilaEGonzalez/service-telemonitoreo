import User from '../entities/User';

import { authInstance } from './axios';

const getUsers = async (): Promise<User[]> => {
  const { data: users } = await authInstance.get('/users');
  return users;
};

export const authService = {
  getUsers
};
