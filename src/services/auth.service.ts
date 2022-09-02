import User from '../entities/User';

import { authInstance } from './axios';

const getUsers = async (): Promise<User[]> => {
  const { data: users } = await authInstance.get('/users');
  return users;
};

const getUserByEmail = async (email: string): Promise<User | null> => {
  const {data: { rows:users }} = await authInstance.get(
    `/users/paginated?email=${email}`
  );
  return users[0];
};

export const authService = {
  getUsers,
  getUserByEmail
};
