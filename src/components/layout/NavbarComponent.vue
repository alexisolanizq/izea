<script setup>
import { RouterLink } from 'vue-router'
import { useNavbar } from '@/composables/navbar'
import logo from '@/assets/images/logo/logoIcon.svg'
import UserMenuComponent from './UserMenuComponent.vue'
import InputComponent from '../common/input/InputComponent.vue';
const { navList, topOfPage, dropdownToggle, isAuth } = useNavbar()
</script>

<template>
  <nav
    :class="`flex items-center justify-between py-3 px-8 sticky top-0 z-50 ${
      topOfPage || isAuth ? 'bg-white shadow-md' : 'bg-transparent'
    } transition-all ease-in-out delay-100 duration-200`"
  >
  <div class="flex gap-4 items-center">
    <RouterLink to="/">
      <img loading="lazy" :src="logo" class="h-12" alt="Izea Logo" />
    </RouterLink>
    <div v-if="isAuth" class="hidden lg:block">
      <InputComponent class="border-2 w-96 rounded-full" />
    </div>
  </div>
    <ul class="flex flex-col lg:flex-row gap-8 items-center">
      <li
        :class="`${
          topOfPage || isAuth ? 'text-gray-700' : 'text-white'
        } font-medium hidden lg:block`"
        v-for="{ id, to, name } in navList"
        :key="id"
      >
        <router-link :to="to">{{ name }}</router-link>
      </li>
      <UserMenuComponent :isAuth="isAuth" :dropdownToggle="dropdownToggle" :topOfPage="topOfPage" />
    </ul>
  </nav>
</template>
