import { useQuery } from 'vue-query';

import API from '@/services/api';

export const useGetProduct = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => API.get(`/cars`)
  });
};
