<template>
  <div class="sticky top-20 px-8 mt-6">
    <h2 class="text-lg font-medium mb-8">Ver Conexiones</h2>
    <SeparatorComponent />
    <div class="flex flex-col">
      <div
        v-for="{ uuid, username, network, followers, avatar } in connections.networks"
        :key="uuid"
        class="bg-white w-4/5 mb-4 rounded-xl p-4 border-l-8 border-l-pink-700"
      >
        <div class="flex gap-5 items-center">
            <div class="relative mr-4">
                <span class="flex items-center justify-center rounded-full bg-pink-700 w-10 h-10">
                  <v-icon :name="`bi-${network}`" color="#fff" />
                </span>
                <span class="flex items-center justify-center rounded-full bg-pink-700 w-10 h-10 absolute top-0 left-6 ring-1 ring-white">
                  <img
                    :src="`https://sandbox.core.api.brandme.la${avatar}`"
                    class="overflow-hidden object-cover rounded-full"
                    :alt="username"
                  />
                </span>
            </div>
          <div class="flex flex-col items-start">
            <router-link class="text-pink-700 text-sm" :to="`/connections/${username}/overview`">
              {{ username }} <v-icon name="bi-chevron-right" />
            </router-link>
            <p class="text-gray-500 text-sm">{{ followers }} seguidores</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import SeparatorComponent from '@/components/common/separator/SeparatorComponent.vue'
import { useConnections } from '@/composables/connections'
const { connections } = useConnections()
console.log(connections)
</script>
