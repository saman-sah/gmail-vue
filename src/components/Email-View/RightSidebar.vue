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

import GoogleKeep from '../../../public/img/GoogleKeep.png'
import GoogleTasks from '../../../public/img/GoogleTasks.png'
import GoogleCalendar from '../../../public/img/GoogleCalendar.png'
import GoogleContacts from '../../../public/img/GoogleContacts.png'

const images = [
  {
    id: 1,
    path: GoogleCalendar
  },
  {
    id: 2,
    path: GoogleKeep
  },
  {
    id: 3,
    path: GoogleTasks
  },
  {
    id: 4,
    path: GoogleContacts
  },
]
</script>
