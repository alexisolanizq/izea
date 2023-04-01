<template>
  <div class="p-10 lg:px-20 xl:px-32">
    <h1 class="text-3xl font-semibold text-center mb-4">Hagamos tu registro</h1>
    <div class="mb-8">
      <p class="text-center text-gray-600">No se encontro ninguna cuenta con el correo</p>
      <p class="text-center underline text-sky-600">alexis@mail.com</p>
    </div>
    <input
      placeholder="Nombre"
      type="text"
      class="w-full rounded border border-slate-200 p-3 mb-4"
    />
    <input
      placeholder="Contraseña"
      type="password"
      class="w-full rounded border border-slate-200 p-3 mb-4"
    />

    <div class="flex items-start mr-4 mb-2">
      <input
        type="checkbox"
        id="A3-yes"
        name="A3-confirmation"
        value="yes"
        class="opacity-0 absolute h-5 w-5"
      />
      <div
        class="bg-white border-2 rounded-md border-slate-200 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 focus-within:border-sky-300 mt-1"
      >
        <svg
          class="fill-current hidden w-3 h-3 text-sky-500 pointer-events-none"
          version="1.1"
          viewBox="0 0 17 12"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" fill-rule="evenodd">
            <g transform="translate(-9 -11)" fill="#1F73F1" fill-rule="nonzero">
              <path
                d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z"
              />
            </g>
          </g>
        </svg>
      </div>

      <label for="A3-yes" class="select-none whitespace-normal lg:w-[60%] text-[15px] text-slate-600">
        Me gustaría recibir noticias de la comunidad de IZEA, a través de mi correo.
      </label>
    </div>
  </div>
</template>

<script setup></script>

<style>
input:checked + div {
  @apply border-blue-500;
}
input:checked + div svg {
  @apply block;
}
</style>
