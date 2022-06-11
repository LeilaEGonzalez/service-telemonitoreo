import User from '../entities/User';

import { baseInstance } from './axios';

const getUsers = async (): Promise<User[]> => {
  const { data: users } = await baseInstance.get('auth/users');
  return users;
};

export const authService = {
  getUsers
};
