<template>
    <button :type="type" class="button__default"
        :class="{ button__small: small, button__large: large, button__medium: medium }" @click="$emit('handleClick')">
        {{ label }}
    </button>
</template>

<script setup>
defineProps({
    type: String,
    label: {
        type: String,
        require: true
    },
    large: Boolean,
    small: Boolean,
    medium: Boolean,
})
defineEmits(['handleClick'])
</script>

<style scoped>
.button__default {
    cursor: pointer;
    padding: 5px 10px;
    border-radius: 6px;
    opacity: 1;
    border: none;
    height: 40px;
    background-color: #2e6ce8;
    color: #fff;
}

.button__default:hover {
    opacity: 0.8;
}

.button__large {
    width: 300px;
}

.button__medium {
    width: 200;
}

.button_small {
    width: 75;
}
</style>