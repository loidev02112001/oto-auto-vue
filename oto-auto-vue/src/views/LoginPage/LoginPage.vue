<template>
  <div class="login-container">
    <div class="login-image"></div>
    <div class="login-form">
      <div class="login-title">Đăng nhập</div>
      <form @submit.prevent="handleLogin" class="form-container">
        <div class="form-field">
          <label class="form-label">Email</label>
          <CustomInput v-model:value="email" placeholder="Please enter email" large></CustomInput>
          <p class="errorMessage">{{ emailError }}</p>
        </div>
        <div class="form-field">
          <label class="form-label">Password</label>
          <CustomInput v-model:value="password" placeholder="Please enter password" type="password" large>
          </CustomInput>
          <p class="errorMessage">{{ passwordError }}</p>
        </div>
        <CustomButton type="submit" label="Login" @handle-click="handleLogin" large />
      </form>
      <div class="register-action">
        Bạn chưa có tài khoản? <router-link to="/register" class="navigation-link">Đăng ký ngay</router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useForm, useField } from 'vee-validate';
import * as yup from 'yup';

import CustomInput from '@/components/CustomInput.vue';
import CustomButton from '@/components/CustomButton.vue';
import { useLoginMutation } from '@/api/auth/login';

const validationSchema = yup.object({
  email: yup.string().required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(16, 'Password must be maximum 16 characters')
});

const { handleSubmit } = useForm({ validationSchema });
const { value: email, errorMessage: emailError } = useField('email');
const { value: password, errorMessage: passwordError } = useField('password');
const { mutate: signIn } = useLoginMutation();

const handleLogin = handleSubmit(values => {
  signIn(values);
});
</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  height: 100vh;

  .login-image {
    width: 55%;
    background-image: url(https://scr.vn/wp-content/uploads/2020/07/Download-h%C3%ACnh-si%C3%AAu-xe-v%E1%BB%81-laptop.jpg);
    background-size: cover;
  }

  .login-form {
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    padding: 30px;
    flex-direction: column;

    .navigation-link {
      text-decoration: none;
    }

    .login-title {
      font-size: 24px;
      margin-bottom: 20px;
    }

    .form-container {
      .form-field {
        display: flex;
        flex-direction: column;
        margin-bottom: 15px;

        .form-label {
          margin-bottom: 5px;
        }

        .errorMessage {
          color: #ff0000;
          font-size: 13px;
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
