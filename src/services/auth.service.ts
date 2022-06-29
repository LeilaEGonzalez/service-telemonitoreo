import User from '../entities/User';

import { authInstance } from './axios';

const getUsers = async (): Promise<User[]> => {
  const { data: users } = await authInstance.get('/users');
  return users;
};

const getUserByEmail = async (email: string): Promise<User | null> => {
  const { data: user } = await authInstance.get(
    `/users/pagination/?email=${email}`
  );
  return user;
};

export const authService = {
  getUsers,
  getUserByEmail
};
