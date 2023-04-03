<template>
  <div :class="` ${isAuth ? 'w-[230px]' : 'w-[160px]'} absolute top-14 right-0 text-right bg-white shadow-md p-4 rounded-lg`">
    <div v-if="isAuth" class="flex flex-col gap-4 py-1 font-medium">
      <router-link to="/dashboard"> Nombre del usuario </router-link>
      <hr class="" />
      <button @click="logout" class="contents">Cerrar sesión</button>
    </div>
    <div v-else class="flex flex-col gap-4 py-1 font-medium">
      <router-link to="/auth/login">Iniciar sesión</router-link>
      <router-link to="/auth/register">Registrarse</router-link>
    </div>
  </div>
</template>

<script setup>
import useMainStore from '@/stores'
import useUserStore from '@/stores/modules/user'
const { isAuth } = useMainStore()
const { logout } = useUserStore()
</script>
