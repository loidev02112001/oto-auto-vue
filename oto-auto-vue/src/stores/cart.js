import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => {
    return { cartItem: {} };
  },
  actions: {
    getCart(value) {
      this.cartItem = value;
    },
  },
});
