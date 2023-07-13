import { useMutation } from 'vue-query';

import API from '@/services/api';
import { useNotification } from '@/stores/notification';

export const useChangePassMutation = () => {
  const id = localStorage.getItem('id');
  const { showNotification } = useNotification();
  return useMutation({
    mutationFn: body => API.post(`/customers/changePassword/${id}`, body),
    onSuccess: data => {
      console.log(data);
    },
    onError: error => {
      showNotification(error.data.message, 'error');
    }
  });
};
