<script setup>
import { RouterLink } from 'vue-router'
import logo from '@/assets/images/logo/logoIcon.svg'
</script>

<template>
  <nav class="flex items-center justify-between py-4 px-8 top-0 sticky z-50">
    <RouterLink to="/">
      <img :src="logo" alt="Izea Logo" />
    </RouterLink>
  </nav>
</template>
