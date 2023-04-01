<template>
  <div class="relative">
    <div class="absolute w-full">
      <nav class="flex justify-between items-center mx-6 py-8 mb-20">
        <img src="@/assets/images/logo/logoIcon.svg" alt="" />
        <router-link to="/">
          <v-icon name="ri-close-fill" scale="1.9" fill="#374121" />
        </router-link>
      </nav>
    </div>
    <div class="flex flex-wrap h-screen">
      <div
        :class="`lg:w-1/2 ${
          isLogin ? 'bg-login-image bg-top' : 'bg-register-image bg-center'
        } bg-cover`"
      />
      <div class="w-full lg:w-1/2">
        <div class="flex justify-center items-center h-screen">
          <router-view />
        </div>
        <div class="fixed bottom-0 right-0 mx-10 mb-6">
          <button
            :disabled="disabled"
            :class="`bg-sky-400 font-medium text-white rounded p-3 ${disabled ? 'bg-sky-200' : ''}`"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
const disabled = ref(true)
const isLogin = ref(true)
const { path } = useRoute()
onMounted(() => {
  if (path !== '/auth/login') {
    isLogin.value = false
  }
})
</script>
