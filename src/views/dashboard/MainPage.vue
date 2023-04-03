<template>
  <div class="bg-gray-theme flex flex-col lg:flex-row h-[88vh]">
    <div class="grow">
      <SidebarProfile />
    </div>
    <div class="grow-[3]">
      <ConnectionsComponent />
    </div>
    <div class="grow">
      <AnalyticsComponent />
    </div>
  </div>
</template>

<script setup>
import ConnectionsComponent from './ConnectionsComponent.vue'
import SidebarProfile from './SidebarProfile.vue'
import AnalyticsComponent from './AnalyticsComponent.vue'
</script>
