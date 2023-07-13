import { useMutation } from 'vue-query';
import { useRouter } from 'vue-router';

import API from '@/services/api';
import { useNotification } from '@/stores/notification';

export const useRegisterMutation = () => {
  const router = useRouter();
  const { showNotification } = useNotification();
  return useMutation({
    mutationFn: body => API.post('/customers/register', body),
    onSuccess: () => {
      router.push('/login');
    },
    onError: error => {
      showNotification(error.data.message, 'error');
    }
  });
};
