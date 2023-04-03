<template>
  <div class="bg-gray-theme flex flex-col lg:flex-row h-[88vh]">
    <div class="grow">
      <SidebarProfile :profile="profile_image" />
    </div>
    <div class="grow-[3]">
      <AnalyticsComponent :metaData="meta_info" />
    </div>
    <div class="grow">
      <ConnectionsComponent />
    </div>
  </div>
</template>

<script setup>
import ConnectionsComponent from './ConnectionsComponent.vue'
import SidebarProfile from './SidebarProfile.vue'
import AnalyticsComponent from './AnalyticsComponent.vue'
import useUserStore from '../../stores/modules/user';

const { userData: { meta_info, profile_image } } = useUserStore()
</script>
