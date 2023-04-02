<script setup>
import HeroComponent from '@/components/layout/HeroComponent.vue'
import NavbarComponent from '@/components/layout/NavbarComponent.vue'
import CollabsByPlatform from '../components/layout/CollabsByPlatform.vue'
</script>

<template>
  <div class="absolute w-full">
    <NavbarComponent />
    <div class="h-[370px]">
      <HeroComponent />
    </div>
    <div class="flex flex-col mx-auto px-6 lg:px-10">
      <CollabsByPlatform />
      <CollabsByPlatform />
      <CollabsByPlatform />
      <CollabsByPlatform />
    </div>
  </div>
</template>
