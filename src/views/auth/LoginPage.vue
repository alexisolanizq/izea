<template>
  <div class="px-10 lg:px-20 xl:px-32">
    <h1 class="text-3xl capitalize font-semibold text-center mb-4">
      Bienvenido creador de contenido
    </h1>
    <p class="text-center mb-4">Inicia sesión o continua con Google.</p>
    <button class="font-semibold rounded border border-slate-300 p-3 w-full text-gray-700 mb-4">
      <div class="flex items-center justify-center gap-3">
        <v-icon name="fc-google" />
        <p>Continuar con google</p>
      </div>
    </button>
    <p class="text-slate-300 text-center mb-4">O</p>
    <input
      v-model="loginForm.email"
      placeholder="Correo"
      type="email"
      :class="`w-full rounded outline-none border border-slate-300 p-3 ${isEnable ? 'mb-4' : ''}`"
    />
    <input
      v-model="loginForm.password"
      v-if="isEnable"
      placeholder="Contraseña"
      type="password"
      class="w-full rounded outline-none border border-slate-300 p-3"
    />
  </div>
  <div class="fixed bottom-0 right-0 mx-10 mb-6">
    <button
      :disabled="!isReadyForm"
      :class="`font-medium text-white rounded p-3 ${!isReadyForm ? 'bg-sky-200/95' : 'bg-sky-400'}`"
      @click="store.login(loginForm)"
    >
      Continuar
    </button>
  </div>
</template>

<script setup>
import { useUser } from '@/composables/user'
import useUserStore from '@/stores/modules/user'
const store = useUserStore()
const { isEnable, isReadyForm, loginForm } = useUser()
console.log(!isReadyForm.value)
</script>
