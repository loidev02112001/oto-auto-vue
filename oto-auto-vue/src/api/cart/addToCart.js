import { useMutation, useQueryClient } from 'vue-query';

import API from '@/services/api';

export const useAddToCartMutation = () => {
  const id = localStorage.getItem('id');
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: body => API.post(`/carts/${id}`, body),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['carts', id], exact: true });
    },
    onError: error => {
      console.log(error.data.message);
    }
  });
};
