<script setup>
import { RouterLink } from 'vue-router'
import { useNavbar } from '@/composables/navbar'
import logo from '@/assets/images/logo/logoIcon.svg'
import UserMenuComponent from './UserMenuComponent.vue';
const { navList, topOfPage, dropdownToggle } = useNavbar()
</script>

<template>
  <nav
    :class="`flex items-center justify-between py-4 px-8 sticky top-0 z-50 ${
      topOfPage ? 'bg-white shadow-md' : 'bg-transparent'
    } transition-all ease-in-out delay-100 duration-200`"
  >
    <RouterLink to="/">
      <img loading="lazy" :src="logo" alt="Izea Logo" />
    </RouterLink>
    <ul class="flex flex-col lg:flex-row gap-8 items-center">
      <li
        :class="`${topOfPage ? 'text-gray-700' : 'text-white'} font-medium hidden lg:block`"
        v-for="{ id, to, name } in navList"
        :key="id"
      >
        <router-link :to="to">{{ name }}</router-link>
      </li>
      <UserMenuComponent :dropdownToggle="dropdownToggle" :topOfPage="topOfPage" />
    </ul>
  </nav>
</template>
