<template>
  <Loading />
  <Notification />
  <router-view></router-view>
</template>

<script setup>
import Loading from './components/Loading.vue';
import Notification from './components/Notification.vue';
</script>
