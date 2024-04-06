<template>
  <div id="UserComponent">
    <img
      @click="openMenu = !openMenu"
      data-tooltip-target="user"
      data-tooltip-placement="bottom"
      src="https://placehold.co/40x40" 
      alt="username"
      class="rounded-full w-8 cursor-pointer"
    >
    <div
      v-show="!openMenu"
      id="user"
      role="tooltip"
      class="inline-block absolute invisible text-xs z-10 py-1 bg-gray-500 px-2 font-medium text-white rounded-sm shadow-sm opacity-0 tooltip darK:bg-gray-600 delay-150"
    >
      <div>Google Acount</div>
      <div class="text-gray-300">Saman Sahraei</div>
      <div class="text-gray-300">sahraei.saman@gmail.com</div>
    </div>

    <div v-show="openMenu" class="absolute z-10 w-80 right-2 bg-white top-14 rounded-lg">
      <div class="w-full flex justify-center">
        <img
          src="https://placehold.co/70x70" 
          alt="username"
          class="rounded-full w-20 mt-4"
        >
      </div>
      <div class="w-full flex justify-center text-gray-700 mt-2 text-lg">
        Saman Sahraei
      </div>
      <div class="w-full flex justify-center text-gray-700 mt-2 text-sm pb-4 border-b">
        sahraei.saman@gmail.com
      </div>
      <div class="flex justify-center my-5">
        <button
          class="bg-transparent text-xs text-gray-600 font-semibold py-2 px-4 border border-gray-300 rounded hover:bg-gray-100"
        >
        Sign out of Gmail
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const openMenu = ref(false)
</script>