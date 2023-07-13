<template>
  <div v-if="onOpen" class="notification" :class="{ notification__success: success, notification__error: error }">
   <!-- Them icon truoc message -->
    <p>{{ message }}</p>
    <button class="btn-close" @click="hideNotification">x</button>
  </div>
</template>
<script setup>
import { useNotification } from '@/stores/notification';
import { storeToRefs } from 'pinia';

const { hideNotification } = useNotification()
const { onOpen, message, success, error } = storeToRefs(useNotification())

</script>
  
<style lang="scss" scoped>
.notification {
  width: 250px;
  height: 50px;
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 10px;
  transition: transform 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border: none;
  border-radius: 6px;
  z-index: 100000;
}

.notification__success {
  background-color: #D9F3EE;
  color: #12A594
}

.notification__error {
  background-color: #ffefef;
  color: #e5484d
}

.notification p {
  margin: 0;
}

.btn-close {
  border: none;
}
</style>