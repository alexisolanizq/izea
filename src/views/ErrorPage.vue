<template>
  <div class="flex justify-center items-center h-screen">
    <div class="text-center">
      <img loading="lazy" src="@/assets/images/errorimg.svg" width="500" alt="404" />
      <h1 class="text-4xl font-semibold pt-4 mb-3">Opps!!!</h1>
      <p class="text-3xl mb-8">Está página que estás buscando no existe</p>
      <RouterLink class="bg-indigo-500 rounded p-4 text-white font-medium" to="/"
        >Regresar al inicio</RouterLink
      >
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
