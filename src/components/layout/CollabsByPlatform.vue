<template>
  <div class="my-9">
    <div class="flex justify-between items-center mb-8">
      <h2 class="text-base lg:text-xl font-semibold">Colaboraciones por plataforma</h2>
      <button>Ver más</button>
    </div>
    <div class="">
      <swiper
        class="h-28"
        :slides-per-view="1"
        :space-between="10"
        :breakpoints="{
          '490': {
            slidesPerView: 2,
            spaceBetween: 20
          },
          '768': {
            slidesPerView: 3,
            spaceBetween: 30
          },
          '984': {
            slidesPerView: 4,
            spaceBetween: 40
          },
          '1370': {
            slidesPerView: 5,
            spaceBetween: 40
          }
        }"
      >
        <swiper-slide
          class="rounded-lg p-10 bg-black/5 w-52 h-28 relative overflow-hidden"
          v-for="{ id, name, to, icon, image } in platforms"
          :key="id"
        >
          <router-link class="" :to="to">
            <span class="absolute bottom-3 left-4 flex items-center gap-1 z-10 text-white">
              <v-icon :name="icon" />
              <p>{{ name }}</p>
            </span>
            <img loading="lazy" :src="image" class="object-cover absolute top-0 bottom-0 right-0 left-0" alt="" />
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
const platforms = ref([
  {
    id: 1,
    name: 'Instagram',
    icon: 'bi-instagram',
    to: '/',
    image:
      'https://izea-marketplace-prod.imgix.net/images/brand/collab-instagram-new.jpg?ixlib=rails-4.2.0&auto=format%2C%20compress&w=209&ar=16%3A9&fit=crop&crop=faces&dpr=2&q=50'
  },
  {
    id: 2,
    name: 'Twitter',
    icon: 'bi-twitter',
    to: '/',
    image:
      'https://izea-marketplace-prod.imgix.net/images/brand/collab-twitter-new.jpg?ixlib=rails-4.2.0&auto=format%2C%20compress&w=209&ar=16%3A9&fit=crop&crop=faces&dpr=3&q=35'
  },
  {
    id: 3,
    name: 'Facebook',
    icon: 'bi-facebook',
    to: '/',
    image:
      'https://izea-marketplace-prod.imgix.net/images/brand/collab-facebook-new.jpg?ixlib=rails-4.2.0&auto=format%2C%20compress&w=209&ar=16%3A9&fit=crop&crop=faces&dpr=2&q=50'
  },
  {
    id: 4,
    name: 'Tiktok',
    icon: 'bi-tiktok',
    to: '/',
    image:
      'https://izea-marketplace-prod.imgix.net/images/brand/collab-tiktok-new.jpg?ixlib=rails-4.2.0&auto=format%2C%20compress&w=209&ar=16%3A9&fit=crop&crop=faces&dpr=2&q=50'
  },
  {
    id: 5,
    name: 'Youtube',
    icon: 'bi-youtube',
    to: '/',
    image:
      'https://izea-marketplace-prod.imgix.net/images/brand/collab-youtube-new.jpg?ixlib=rails-4.2.0&auto=format%2C%20compress&w=209&ar=16%3A9&fit=crop&crop=faces&dpr=2&q=50'
  },
  {
    id: 6,
    name: 'Pinterest',
    icon: 'bi-pinterest',
    to: '/',
    image:
      'https://izea-marketplace-prod.imgix.net/images/brand/collab-pinterest-new.jpg?ixlib=rails-4.2.0&auto=format%2C%20compress&w=209&ar=16%3A9&fit=crop&crop=faces&dpr=3&q=35'
  }
])
</script>
