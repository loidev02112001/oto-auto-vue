import { useQuery } from 'vue-query';

import API from '@/services/api';
import { useCartStore } from '@/stores/cart';

export const useGetCart = () => {
  const id = localStorage.getItem('id');
  const cartStore = useCartStore();
  return useQuery({
    queryKey: ['carts', id],
    queryFn: () => API.get(`/carts/${id}`),
    onSuccess: data => {
      cartStore.getCart(data.data.data);
    }
  });
};
