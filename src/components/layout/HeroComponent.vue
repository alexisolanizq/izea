<template>
  <div class="absolute top-0 h-[450px] w-full bg-hero-gradient flex items-center justify-center">
    <div class="flex flex-col items-center mt-9 px-4">
      <h1 class="text-3xl lg:text-5xl font-medium text-white text-center mb-8">
        We Are Influencer Marketing.
      </h1>
      <div class="relative block w-[80%]">
        <div class="absolute pointer-events-none">
            <v-icon class="absolute top-[17.5px] left-5" color="#9097a2" scale="1" name="hi-search" />
        </div>
        <input
          type="text"
          placeholder="Encuentra creadores"
          class="rounded-full w-full outline-0 pl-12 py-4 mb-8"
        />
      </div>
      <button
        class="transition-all ease-in-out rounded-full bg-white/25 hover:bg-white/60 hover:text-gray-600 text-sm text-white font-semibold hidden lg:block py-3 px-4"
      >
        Haz que los influencers te presenten
      </button>
    </div>
  </div>
</template>
