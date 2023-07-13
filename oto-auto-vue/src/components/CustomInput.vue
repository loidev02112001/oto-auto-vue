<template>
    <input class="custom-input" :type="type" :placeholder="placeholder" :value="value"
        @input="$emit('update:value', $event.target.value)"
        :class="{ input__small: small, input__large: large, input__medium: medium }" />
</template>

<script setup>
defineProps({
    placeholder: String,
    value: String,
    type: String,
    small: Boolean,
    large: Boolean,
    medium: Boolean
})
defineEmits(['update:value'])
</script>

<style scoped>
.custom-input {
    border-radius: 6px;
    padding: 7px 10px;
}

.input__large {
    width: 300px;
}

.input__medium {
    width: 200px;
}

.input__small {
    width: 75px;
}</style>