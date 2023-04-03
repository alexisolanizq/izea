<script setup>
import SeparatorComponent from '../../components/common/separator/SeparatorComponent.vue';
defineProps(['profile'])
</script>

<template>
    <div class="w-full sticky top-20 p-4">
        <div class="flex flex-col w-2/3 mx-auto">
            <img :src="`https://sandbox.core.api.brandme.la${profile}`" class="rounded-full h-36 w-36 mx-auto object-cover p-2 mb-4" alt="user-profile">
            <div class="text-center">
                <p class="text-lg font-semibold">Developers JVD</p>
                <p>--- Followers</p>
            </div>
            <SeparatorComponent width="h-[1.5px]" />
            <div class="text-left">
                <p class="text-gray-600 font-medium">Ubicación</p>
                <p>México</p>
            </div>
        </div>
    </div>
</template>