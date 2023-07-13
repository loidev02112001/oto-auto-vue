<template>
    <div class="changePass">
        <div class="changePass__title">Change Password</div>
        <form @submit.prevent="handleChangePass" class="form-container">
            <div class="form-field">
                <label class="form-label">Old password</label>
                <CustomInput placeholder="Please enter old password" v-model:value="oldPassword" type="password" large>
                </CustomInput>
                <p class="error-message">{{ oldPasswordError }}</p>
            </div>
            <div class="form-field">
                <label class="form-label">New password</label>
                <CustomInput placeholder="Please enter new password" v-model:value="newPassword" type="password" large>
                </CustomInput>
                <p class="error-message">{{ newPasswordError }}</p>
            </div>
            <div class="form-field">
                <label class="form-label">Confirm new password</label>
                <CustomInput placeholder="Please enter confirm password" v-model:value="passwordConfirm" type="password" large>
                </CustomInput>
                <p class="error-message">{{ passwordConfirmError }}</p>
            </div>
            <div class="changePass-btn">
                <CustomButton type="submit" label="Change Password" large />
            </div>
        </form>
    </div>
</template>

<script setup>
import * as yup from 'yup'
import { useForm, useField } from 'vee-validate';

import CustomButton from '@/components/CustomButton.vue';
import CustomInput from '@/components/CustomInput.vue';
import { useChangePassMutation } from '@/api/auth/changePassword';

const validationSchema = yup.object({
    oldPassword: yup.string().required('Old password is required field'),
    newPassword: yup.string().required('New password is required field'),
    passwordConfirm: yup.string().required('Confirm password is required').oneOf([yup.ref('newPassword'), null], 'Confirm password do not match')
})
const { handleSubmit } = useForm({ validationSchema })
const { value: oldPassword, errorMessage: oldPasswordError } = useField('oldPassword')
const { value: newPassword, errorMessage: newPasswordError } = useField('newPassword')
const { value: passwordConfirm, errorMessage: passwordConfirmError } = useField('passwordConfirm')
const { mutate:changePassword } = useChangePassMutation()

const handleChangePass = handleSubmit((values) => {
    changePassword(values)
})
</script>

<style lang="scss" scoped>
.changePass {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 30px 0;

    .changePass__title {
        font-size: 25px;
    }

    .form-container {
        width: 30%;

        .form-field {
            display: flex;
            flex-direction: column;
            margin: 5px 0;

            .form-label {
                margin: 10px 0;
            }

            .error-message {
                color: #ff0000;
                font-size: 13px;
                margin: 5px 0 5px 10px;
            }
        }
    }
}
</style>