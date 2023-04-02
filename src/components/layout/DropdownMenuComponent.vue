<template>
    <div class="absolute top-14 right-0 w-[150px] text-right bg-white p-4 rounded-lg">
        <div v-if="isAuth" class="flex flex-col gap-2">
            <button>Iniciar sesión</button>
        </div>
        <div v-else class="flex flex-col gap-2">
            <router-link to="/auth/login">Iniciar sesión</router-link>
            <router-link to="/auth/register">Registrarse</router-link>
        </div>
    </div>
</template>

<script setup>
import useMainStore from '@/stores'
const {isAuth} = useMainStore()
</script>