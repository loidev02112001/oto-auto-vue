import { useQuery } from 'vue-query';

import API from '@/services/api';
import { useUserStore } from '@/stores/userInfor';

export const useUserInfor = () => {
  const id = localStorage.getItem('id');
  const userStore = useUserStore();
  return useQuery({
    queryKey: ['userInfor', id],
    queryFn: () => API.get(`/customers/getInfo/${id}`),
    onSuccess: data => {
      userStore.getUser(data.data.userInfo);
    }
  });
};
