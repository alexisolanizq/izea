<template>
  <div class="p-10 lg:px-20 xl:px-32">
    <h1 class="text-3xl capitalize font-semibold text-center mb-4">
      Bienvenido creador de contenido
    </h1>
    <p class="text-center mb-4">Inicia sesión o continua con Google.</p>
    <button class="font-semibold rounded border border-slate-300 p-3 w-full text-gray-700 mb-4">
      <div class="flex items-center justify-center gap-3">
        <v-icon name="fc-google" />
        <p>Continuar con google</p>
      </div>
    </button>
    <p class="text-slate-300 text-center mb-4">O</p>
    <input placeholder="Correo" type="text" class="w-full rounded outline-none border border-slate-300 p-3" />
  </div>
</template>
