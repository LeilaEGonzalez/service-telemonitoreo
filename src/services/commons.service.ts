import { commonsRouterInstance } from './axios';

export const getImageURL = async (path: string): Promise<string> => {
  if (!path) {
    return '';
  }

  const { data } = await commonsRouterInstance.post('/commons/images', {
    url: path
  });

  return data ?? '';
};
