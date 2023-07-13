<template>
  <div class="header" :class="{ 'cart-active': activeCart }">
    <div class="header__logo">
      <router-link to="/">
        <img src="https://www.madebydesignesia.com/themes/rentaly/images/logo-light.png" alt="error-Img" />
      </router-link>
    </div>
    <div class="header__menu">
      <router-link v-for="(item, index) in menu" :to="item.path" :key="index" class="header__menu-link">
        {{ item.label }}
      </router-link>
    </div>
    <div class="header__action">
      <div class="header__action-setting">
        <div class="header__action-name">{{ userInfor.userName }}</div>
        <ul class="menu-dropdown">
          <li>
            <router-link to="/changePassword" class="navigation">Change password</router-link>
          </li>
          <li>Edit your profile</li>
          <li @click="handleSignOut">Sign out</li>
        </ul>
      </div>
      <div class="header__action-cart" @click="toggleCart">
        <i class="fa-sharp fa-solid fa-cart-shopping" style="color: #bdb7b7"></i>
        <div class="header__action-cart-item">
          <span>{{ cartItem.listProduct?.length ? cartItem.listProduct?.length : 0 }}</span>
        </div>
      </div>
    </div>
    <div class="cart-container" :class="{ 'cart-active': activeCart }">
      <Cart @toggleCart="toggleCart" :activeCart="activeCart"></Cart>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import Cookies from 'js-cookie';
import { useRouter } from 'vue-router';

import menu from '@/constants/menu';
import { useCartStore } from '@/stores/cart';
import { useUserStore } from '@/stores/userInfor';
import Cart from '@/components/Cart.vue';

const activeCart = ref(false);
const userStore = useUserStore();
const cartStore = useCartStore();
const router = useRouter();
const { cartItem } = storeToRefs(cartStore);
const { userInfor } = storeToRefs(userStore);

const toggleCart = () => {
  activeCart.value = !activeCart.value;
};

const handleSignOut = () => {
  Cookies.remove('refreshToken');
  Cookies.remove('accessToken');
  localStorage.removeItem('id');
  router.push('/login');
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-around;
  padding: 10px 25px;
  border-bottom: 1px solid white;
  color: #bdb7b7;
  background-color: black;

  .header__menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 45%;
    cursor: pointer;
    text-transform: uppercase;

    .header__menu-link {
      font-weight: 600;
      text-decoration: none;
      color: #bdb7b7;
    }

    .router-link-exact-active {
      color: #fff;
    }

    .header__menu-link:hover {
      color: #fff;
    }
  }

  .header__action {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 15%;

    .header__action-setting {
      position: relative;
      cursor: pointer;
    }

    .header__action-cart-item {
      position: absolute;
      bottom: 12px;
      left: 12px;
      width: 23px;
      height: 23px;
      display: flex;
      align-items: center;
      color: white;
      font-size: 13px;
      background-color: #ff0000;
      border-radius: 50%;
    }

    .header__action-cart-item span {
      margin: auto;
    }

    .menu-dropdown {
      position: absolute;
      top: 30px;
      display: none;
      width: 150px;
      color: #000000;
      border: 1px solid #cfd4d5;
      border-radius: 6px;
      background-color: #fff;
      list-style-type: none;
    }

    .menu-dropdown li {
      font-size: 15px;
      padding: 10px;
      cursor: pointer;
    }

    .menu-dropdown li:hover {
      background-color: #bdb7b7;
    }

    .menu-dropdown .navigation {
      text-decoration: none;
      color: #000000;
    }

    .header__action-setting:hover .menu-dropdown {
      display: block;
    }

    .header__action-name:hover {
      color: white;
    }

    .header__logo {
      cursor: pointer;
    }

    .header__logo img {
      width: 156px;
      height: 56px;
    }

    .header__action-cart {
      position: relative;
      cursor: pointer;
    }
  }

  .cart-container {
    position: fixed;
    top: 0;
    right: -3000px;
    width: 300px;
    height: 100vh;
    width: 100vw;
    transition: right 0.3s ease-in;
  }
  .cart-active {
    right: 0;
  }
}
</style>
