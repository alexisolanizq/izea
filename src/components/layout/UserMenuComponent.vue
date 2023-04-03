<template>
  <div class="relative">
    <button @click="toggle = !toggle">
      <v-icon
        name="fa-user-circle"
        scale="2.5"
        :color="`${topOfPage || isAuth ? '#333' : '#fff'}`"
      />
    </button>
    <DropdownMenuComponent v-if="toggle" />
  </div>
</template>

<script setup>
import DropdownMenuComponent from '@/components/layout/DropdownMenuComponent.vue'
import { ref } from 'vue'
const props = defineProps(['dropdownToggle', 'topOfPage', 'isAuth'])
const toggle = ref(props.dropdownToggle)
</script>
