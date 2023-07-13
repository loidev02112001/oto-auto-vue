import { defineStore } from 'pinia';

export const useNotification = defineStore('notification', {
  state: () => {
    return {
      onOpen: false,
      message: '',
      success: false,
      error: false
    };
  },
  actions: {
    showNotification(message, status) {
      this.onOpen = true;
      this.message = message;
      if (status === 'success') {
        this.success = true;
      }
      if (status === 'error') {
        this.error = true;
      }
      setTimeout(() => {
        this.resetState();
      }, 5000);
    },
    hideNotification() {
      this.resetState();
    },
    resetState() {
      this.onOpen = false;
      this.message = '';
      this.success = false;
      this.error = false;
    }
  }
});
