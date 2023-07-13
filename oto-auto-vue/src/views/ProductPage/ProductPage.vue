<template>
  <div class="product">
    <h1 class="product__heading">Welcome To Our Products</h1>
    <div class="product__content">
      <div class="product__content-action">
        <input class="input-search" placeholder="Type here to search" />
        <div>Search filter</div>
        <select class="color-select">
          <option v-for="(color, index) in colorSelect" :key="index" :value="color.value">{{ color.label }}</option>
        </select>
        <select class="color-select">
          <option v-for="(company, index) in companySelect" :key="index" :value="company.value">{{ company.label }}
          </option>
        </select>
        <div>Price: {{ price }}$</div>
        <input type="range" min="0" max="2000" v-model="price" class="price-filter">
        <div class="voucher">Get voucher</div>
      </div>
      <div class="product__content-cars">
        <div class="list-product">
          <div v-for="product in products?.data.data" :key="product._id" class="product">
            <img class="product__image" :src="product.carImage" alt="error img" />
            <div class="product__name">
              {{ product.name }}
            </div>
            <div class="product__price">
              <div class="product__price-after">
                {{ product.amountPrice }}$
              </div>
              <div class="product__price-before">
                {{ product.price }}$
              </div>
            </div>
            <div class="product__description">
              {{ product.description }}
            </div>
            <div class="btn-addToCart" @click="handleAddToCart(product)">
              <i class="fa-solid fa-cart-shopping cart-icon"></i>
              Thêm vào giỏ hàng
            </div>
            <div class="btn-viewDetail">
              Xem chi tiết
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import { colorSelect, companySelect } from '@/constants/product';
import { useAddToCartMutation } from '@/api/cart/addToCart';
import { useGetProduct } from '@/api/products/product';

const price = ref(0)
const { mutate:addToCart } = useAddToCartMutation()
const { data: products } = useGetProduct()

const handleAddToCart = (product) => {
  addToCart({ idProduct: product._id, amountProduct: 1 })
}; 
</script>

<style lang="scss" scoped>
.product__heading {
  text-align: center;
  font-size: 35px;
  margin: 60px 0;
}

.product__content {
  border-top: 1px solid #e9ebf0;
  display: flex;
  width: 85%;
  margin: 0 auto;
  justify-content: space-between;

  .product__content-action {
    width: 20%;

    .color-select {
      width: 100%;
      padding: 5px 5px;
    }

    .price-filter {
      width: 100%;
    }

    >* {
      margin: 15px 0;
    }

    .input-search {
      border: 1px solid #d9d9d9;
      width: 100%;
      padding: 8px 10px;
      border-radius: 5px;
    }

    .voucher {
      width: 100%;
      text-align: center;
      background-color: black;
      color: white;
      padding: 10px 0;
      cursor: pointer;
      opacity: 1;
      border-radius: 6px;

      &:hover {
        opacity: 0.8;
      }
    }
  }

  .product__content-cars {
    width: 75%;

    .list-product {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;

      .product {
        border: 1px solid #e9ebf0;
        width: 45%;
        text-align: center;
        margin: 15px 0;

        .product__image {
          max-width: 100%;
          max-height: 100%;
          width: 100%;
          height: 258px;
          object-fit: cover;
        }

        .product__description {
          min-height: 50px;
          width: 90%;
          margin: 0 auto;
        }

        .product__name {
          font-size: 20px;
          font-weight: 600;
          margin-top: 10px;
        }

        .btn-addToCart {
          width: 90%;
          background-color: #2e6ce8;
          margin: 10px auto;
          padding: 10px 0;
          color: white;
          cursor: pointer;

          .cart-icon {
            margin-right: 5px;
          }

          &:hover {
            opacity: 0.8;
          }
        }

        .btn-viewDetail {
          width: 90%;
          border: 1px solid blue;

          margin: 0 auto;
          padding: 10px 0;
          color: white;
          margin: 10px auto;
          cursor: pointer;

          &:hover {
            opacity: 0.6;
          }

          color: blue;
        }

        .product__price {
          display: flex;
          justify-content: center;
        }

        .product__price-after,
        .product__price-before {
          font-size: 18px;
          font-weight: 500;
          margin: 10px 0;
          font-weight: bold;
        }

        .product__price-after {
          color: #d0021c;
          margin-right: 10px;
        }

        .product__price-before {
          text-decoration: line-through;
        }

      }
    }
  }
}
</style>
