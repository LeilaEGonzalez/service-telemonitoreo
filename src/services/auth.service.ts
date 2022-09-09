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

const existUserEmail = async (email:string): Promise<boolean> => {
  const { data } = await authInstance.post(`/users/exist-email`, { email });
  return data;
}

const updateUserEmail = async (id:string, newEmail:string):Promise<void> => {
  const { data } = await authInstance.put(`/users/${id}/change-email`, { newEmail });
  return data;
}

export const authService = {
  getUsers,
  getUserByEmail,
  existUserEmail,
  updateUserEmail
};
