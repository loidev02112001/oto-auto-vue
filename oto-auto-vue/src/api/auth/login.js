import { useMutation } from 'vue-query';
import Cookies from 'js-cookie';
import { useRouter } from 'vue-router';
import { useNotification } from '@/stores/notification';

import API from '@/services/api';

export const useLoginMutation = () => {
  const router = useRouter();
  const { showNotification } = useNotification();
  return useMutation({
    mutationFn: body => API.post(`/customers/login`, body),
    onSuccess: data => {
      Cookies.set('accessToken', data.data.accessToken, { path: '/' }, { expires: 1 });
      Cookies.set('refreshToken', data.data.refreshToken, { path: '/' }, { expires: 1 });
      localStorage.setItem('id', data.data.userId);
      router.push('/');
    },
    onError: error => {
      showNotification(error.data.message, 'error');
    }
  });
};
