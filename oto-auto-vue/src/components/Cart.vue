<template>
  <div class="cart">
    <div class="cart-overlay" @click="$emit('toggleCart')" :class="{ 'is-overlay': props.activeCart }"></div>
    <div class="cart-wrapper">
      <div class="cart__header">
        <div class="cart__close" @click="$emit('toggleCart')"></div>
        <h1 class="cart__title">Cart</h1>
      </div>
      <div class="cart__content">
        <ul>
          <li v-for="item in cartItem.listProduct" :key="item._id">
            <div class="cart__item">
              <div class="cart__item-buttons">
                <span class="cart__item-delete-btn"></span>
              </div>
              <div class="cart__item-image">
                <img :src="item.idProduct.carImage" alt="" />
              </div>
              <div class="cart__item-description">
                <span class="cart__item-name">{{ item.idProduct.name }}</span>
                <span class="cart__item-description">{{ item.idProduct.description }}</span>
              </div>
              <div class="cart__item-quantity">
                <input type="number" class="cart__item-input" :value="item.amountProduct"
                  @input="event => handleUpdateCart(event.target.value, item.idProduct._id)" />
              </div>
              <div class="cart__item-total-price">{{ item.amountProduct * item.idProduct.amountPrice }}</div>
            </div>
          </li>
        </ul>
        <button>Thanh toan</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia';
import { useUpdateCartMutation } from '@/api/cart/updateCart'
import { useCartStore } from '@/stores/cart';

const cartStore = useCartStore();
const { cartItem } = storeToRefs(cartStore);
const { mutate: updateCart } = useUpdateCartMutation()
const handleUpdateCart = (amountProduct, idProduct) => {
  updateCart({ amountProduct: parseInt(amountProduct), idProduct })
}
const props = defineProps(['activeCart']);
defineEmits(['toggleCart']);
</script>

<style lang="scss">
.cart {
  .cart-overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    display: none;
    width: 100vw;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
  }

  .is-overlay {
    display: block;
  }

  .cart-wrapper {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1000;
    display: flex;
    flex-direction: column;
    width: 50%;
    background: #ffffff;

    .cart__header {
      position: sticky;
      top: 0;
      left: 0;
      display: flex;
      align-items: center;
      width: 100%;
      padding: 10px;
      border-bottom: 1px solid #e1e8ee;
      transition: top 0.3s ease-in;

      .cart__close {
        width: 18px;
        height: 17px;
        margin-inline-end: 30px;
        background: url(https://designmodo.com/demo/shopping-cart/delete-icn.svg) no-repeat center;
        cursor: pointer;
      }

      .cart__title {
        width: 100%;
        font-weight: 600;
        color: #000000;
      }
    }

    .cart__content {
      max-height: 90vh;
      overflow-y: auto;
      list-style-type: none;

      .cart__item {
        display: flex;
        justify-content: space-between;
        height: 100px;
        padding: 0 10px;

        .cart__item-buttons {
          padding-top: 30px;

          .cart__item-delete-btn {
            display: inline-block;
            cursor: pointer;
            width: 18px;
            height: 17px;
            background: url(https://designmodo.com/demo/shopping-cart/delete-icn.svg) no-repeat center;
          }
        }

        .cart__item-image {
          img {
            width: 80px;
            height: 80px;
          }
        }

        .cart__item-description {
          padding-top: 10px;
          width: 30%;

          span {
            display: block;
            font-size: 14px;
            width: 100%;
            color: #43484d;
            font-weight: 600;
          }

          span:first-child {
            margin-bottom: 5px;
          }

          span:last-child {
            font-weight: 300;
            margin-top: 8px;
          }
        }

        .cart__item-quantity {
          padding-top: 20px;

          .cart__item-input {
            border: none;
            text-align: center;
            width: 32px;
            font-size: 16px;
            color: #43484d;
            font-weight: 300;
          }

          button[class*='btn'] {
            width: 30px;
            height: 30px;
            background-color: #e1e8ee;
            border-radius: 6px;
            border: none;
            cursor: pointer;
          }
        }

        .cart__item-total-price {
          width: 10%;
          padding-top: 27px;
          text-align: center;
          font-size: 16px;
          color: #43484d;
          font-weight: 300;
        }
      }

      .cart__item:first-child {
        padding-top: 20px;
      }
    }
  }
}
</style>
