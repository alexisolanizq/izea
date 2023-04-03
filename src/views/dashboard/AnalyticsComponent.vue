<template>
  <div class="bg-white pt-6 lg:overflow-y-scroll h-[88vh] border-x-2 shadow-md">
    <div class="px-8">
      <h2 class="text-lg font-medium mb-8">Datos demográficos</h2>
      <div class="flex flex-wrap justify-between">
        <div class="w-1/2 mb-9">
          <p class="font-semibold">Genero</p>
          <p>{{ metaData.gender }}</p>
        </div>
        <div class="w-1/2 mb-9">
          <p class="font-semibold">Edad</p>
          <p>{{ metaData.age }}</p>
        </div>
        <div class="w-1/2 mb-9">
          <p class="font-semibold">Etnia</p>
          <p>---</p>
        </div>
        <div class="w-1/2 mb-9">
          <p class="font-semibold">Estado civil</p>
          <p>{{ metaData.relationship === 'prefer_not_say' ? 'Prefiero no decir' : 'Soltero' }}</p>
        </div>
        <div class="w-1/2 mb-9">
          <p class="font-semibold">Educación</p>
          <p>{{ metaData.scolarship ?? '---' }}</p>
        </div>
        <div class="w-1/2 mb-9">
          <p class="font-semibold">Idiomas</p>
          <p>{{ metaData.language ?? '---' }}</p>
        </div>
        <div class="w-1/2 mb-9">
          <p class="font-semibold">Mascotas</p>
          <p class="flex gap-1">
            <span class="" v-for="(item, index) in metaData.pets" :key="index">
              {{ item }}
            </span>
          </p>
        </div>
        <div class="w-1/2 mb-9">
          <p class="font-semibold">Hijos</p>
          ----
          <!-- <p>{{ metaData.userData.children ?? '----' }}</p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps(['metaData'])
</script>
