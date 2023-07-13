<template>
    <div class="default-layout-container">
      <div class="default-layout-header" :class="{ 'navbar-hidden': navbarHidden }" @scroll="handleScroll">
        <Header></Header>
      </div>
      <div class="default-layout-content">
        <router-view></router-view>
      </div>
      <div class="default-layout-footer">
        <Footer></Footer>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onBeforeUnmount, onMounted } from 'vue';
  
  import Footer from '@/components/Footer.vue';
  import Header from '@/components/Header.vue';
  import { useGetCart } from '@/api/cart/getCart';
  import { useUserInfor } from '@/api/user/user';
  
  useGetCart();
  useUserInfor();
  
  const navbarHidden = ref(false);
  let prevScrollPos = window.pageYOffset;
  
  onMounted(() => {
    window.addEventListener('scroll', handleScroll);
  });
  
  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
  });
  
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (prevScrollPos > currentScrollPos) {
      navbarHidden.value = false;
    } else {
      navbarHidden.value = true;
    }
    prevScrollPos = currentScrollPos;
  };
  </script>
  
  <style>
  .default-layout-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  
  .default-layout-header {
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    transition: top 0.3s ease-in;
  }
  
  .default-layout-content {
    flex: 1;
  }
  
  .navbar-hidden {
    top: -100px;
  }
  </style>
  