<template>
  <div class="register-container">
    <div class="register-image"></div>
    <div class="register-form">
      <div class="register-title">Đăng ký</div>
      <form class="form-container" @submit.prevent="handleRegister">
        <div class="form-field">
          <label class="form-label">UserName</label>
          <CustomInput placeholder="Please enter username" v-model:value="userName" large></CustomInput>
          <p class="errorMessage">{{ usernameError }}</p>
        </div>
        <div class="form-field">
          <label class="form-label">Phone number</label>
          <CustomInput placeholder="Please enter phone number" v-model:value="phoneNumber" large></CustomInput>
          <p class="errorMessage">{{ phoneNumberError }}</p>
        </div>
        <div class="form-field">
          <label class="form-label">Email</label>
          <CustomInput placeholder="Please enter email" v-model:value="email" large></CustomInput>
          <p class="errorMessage">{{ emailError }}</p>
        </div>
        <div class="form-field">
          <label class="form-label">Address</label>
          <CustomInput placeholder="Please enter address" v-model:value="address" large></CustomInput>
          <p class="errorMessage">{{ addressError }}</p>
        </div>
        <div class="form-field">
          <label class="form-label">Password</label>
          <CustomInput placeholder="Please enter password" v-model:value="password" large type="password">
          </CustomInput>
          <p class="errorMessage">{{ passwordError }}</p>
        </div>
        <div class="form-field">
          <label class="form-label">Confirm Password</label>
          <CustomInput placeholder="Please enter confirm password" v-model:value="confirmPassword" large
            type="password"></CustomInput>
          <p class="errorMessage">{{ confirmPasswordError }}</p>
        </div>
        <div class="register-btn">
          <CustomButton @handle-click="handleRegister" label="Sign-up" type="submit" large />
        </div>
      </form>
      <div class="navigate">
        Bạn đã có tài khoản ?
        <router-link to="/login" class="navigation-link">
          Đăng nhập ngay
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useField, useForm } from 'vee-validate';
import * as yup from 'yup'

import CustomInput from '@/components/CustomInput.vue'
import CustomButton from '@/components/CustomButton.vue';
import { useRegisterMutation } from '@/api/auth/register';

const validationSchema = yup.object({
  email: yup.string().required('Email is required').email('Email is not invalid'),
  password: yup
    .string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .max(16, 'Password must be maximum 16 characters'),
  userName: yup.string().required('User name is required'),
  phoneNumber: yup.string().required('Phone number is required'),
  address: yup.string().required('Address is required'),
  confirmPassword: yup.string().required('Confirm password is required').oneOf([yup.ref('password'), null], 'Passwords must match')
})
const { handleSubmit } = useForm({ validationSchema })
const { value: email, errorMessage: emailError } = useField('email');
const { value: password, errorMessage: passwordError } = useField('password');
const { value: userName, errorMessage: usernameError } = useField('userName');
const { value: phoneNumber, errorMessage: phoneNumberError } = useField('phoneNumber');
const { value: address, errorMessage: addressError } = useField('address');
const { value: confirmPassword, errorMessage: confirmPasswordError } = useField('confirmPassword');
const { mutate:register } = useRegisterMutation()

const handleRegister = handleSubmit((values) => {
  register(values)
})
</script>

<style lang="scss" scoped>
.register-container {
  display: flex;
  min-height: 100vh;

  .register-image {
    width: 55%;
    background-image: url(https://scr.vn/wp-content/uploads/2020/07/Download-h%C3%ACnh-si%C3%AAu-xe-v%E1%BB%81-laptop.jpg);
    background-size: cover;
  }

  .register-form {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    padding: 30px;
    flex-direction: column;

    .register-title {
      font-size: 24px;
      margin-bottom: 20px;
    }

    .form-container {
      .form-field {
        display: flex;
        flex-direction: column;
        margin-bottom: 10px;

        .form-label {
          font-size: 15px;
        }

        .errorMessage {
          margin-left: 5px;
          color: #ff0000;
          font-size: 13px;
        }

        label {
          margin-bottom: 5px;
        }
      }

      .register-btn {
        margin: 15px 0;
      }
    }

    .navigation-link {
      text-decoration: none;
    }
  }
}
</style>