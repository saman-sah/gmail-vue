<template>
  <div class="m-3">
    <div
      v-for="img in images" 
      :key="img.id"
      class="w-6 h-6 flex justify-center mb-7"
    >
      <img 
        :src="img.path"
        alt=""
        class="object-center"
      >
    </div>
    <div class="w-6 flex mb-7 border border-gray-300" />
    <div class="w-6 h-6 flex justify-center mb-7">
      <IconComponent
        :icon="PlusIcon"
      />
    </div>
  </div>
</template>

<script setup>
import IconComponent from '../IconComponent.vue'
import PlusIcon from 'vue-material-design-icons/Plus.vue'
const images = [
  {
    id: 1,
    path: 'img/GoogleCalendar.png'
  },
  {
    id: 2,
    path: 'img/GoogleKeep.png'
  },
  {
    id: 3,
    path: 'img/GoogleTasks.png'
  },
  {
    id: 4,
    path: 'img/GoogleContacts.png'
  },
]
</script>
