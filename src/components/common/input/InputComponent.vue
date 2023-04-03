<template>
  <div class="relative block">
    <div v-if="noButton" class="absolute pointer-events-none">
      <v-icon class="absolute top-[17.5px] left-5" color="#9097a2" scale="1" name="hi-search" />
    </div>
    <input
      :type="type"
      placeholder="Encuentra creadores"
      :class="`rounded-full shadow-lg w-full outline-0 pl-12 py-4 ${classes}`"
    />
  </div>
</template>

<script setup>
defineProps(['type', 'placeholder', 'classes', 'noButton'])
</script>
