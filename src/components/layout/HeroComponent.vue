<template>
  <div class="absolute top-0 h-[450px] w-full bg-hero-gradient flex items-center justify-center">
    <div class="flex flex-col items-center mt-9 px-4">
      <h1 class="text-3xl lg:text-5xl font-medium text-white text-center mb-8">
        We Are Influencer Marketing.
      </h1>

      <InputComponent class="w-[80%] mb-8" />

      <button
        class="transition-all ease-in-out rounded-full bg-white/25 hover:bg-white/60 hover:text-gray-600 text-sm text-white font-semibold hidden lg:block py-3 px-4"
      >
        Haz que los influencers te presenten
      </button>
    </div>
  </div>
</template>

<script setup>
import InputComponent from '../common/input/InputComponent.vue'
</script>
