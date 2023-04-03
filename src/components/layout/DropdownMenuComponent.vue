<template>
  <div class="absolute top-14 right-0 w-[230px] text-right bg-white shadow-md p-4 rounded-lg">
    <div v-if="isAuth" class="flex flex-col gap-4 py-1 font-medium">
      <router-link to="/dashboard"> Nombre del usuario </router-link>
      <hr class="" />
      <button class="contents">Cerrar sesión</button>
    </div>
    <div v-else class="flex flex-col gap-4 py-1 font-medium">
      <router-link to="/auth/login">Iniciar sesión</router-link>
      <router-link to="/auth/register">Registrarse</router-link>
    </div>
  </div>
</template>

<script setup>
import useMainStore from '@/stores'
const { isAuth } = useMainStore()
</script>
