import { defineStore } from 'pinia';

export const useUserStore = defineStore('userInfor', {
  state: () => {
    return { userInfor: {} };
  },
  actions: {
    getUser(value) {
      this.userInfor = value;
    }
  },
});
