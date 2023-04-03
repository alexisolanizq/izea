<template>
    <span :class="`my-4 w-full bg-gray-600/10 rounded mx-auto ${width}`"/>
</template>

<script setup>
defineProps(['width'])
</script>