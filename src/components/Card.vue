<script setup>
import { defineProps } from 'vue';

defineProps({
    bg:{
        type: String,
        default: 'bg-gray-100'
    },
    hover:{
        type: String,
        default: 'hover:bg-gray-200 transition-colors duration-300'
    }
});
</script>

<template>
    <div :class="`${bg} ${hover} p-6 rounded-lg shadow-md text-center cursor-pointer`">
        <slot></slot>
    </div>
</template>