<template>
  <div 
    id="EmailView" 
    class="bg-gray-50 h-screen"
  >
    <NavHeader />

    <div class="flex w-full justify-between">
      <div id="SideMenu" class="side-menu w-[300px]">
        <div 
          @click="newEmialOpen = true" 
          class="flex items-center justify-start bg-sky-200 w-36 h-8 mt-2 rounded-2xl ml-2 px-2 py-2 cursor-pointer">
          <IconComponent
            :icon="PencilOutlineIcon"
            icon-size="25"
            class="mr-4"
          />
          <span class="text-sm">
            Compose
          </span>
        </div>
        <LeftSidebar />
      </div>
      <router-view />
      <RightSidebar />
    </div>

    <EmailCompose 
      v-if="newEmialOpen"
      v-model="newEmialOpen"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

import NavHeader from '@/components/Email-View/NavHeader.vue'
import LeftSidebar from '@/components/Email-View/LeftSidebar.vue'
import RightSidebar from '@/components/Email-View/RightSidebar.vue'
import EmailCompose from '@/components/Email-View/EmailCompose.vue'
import PencilOutlineIcon from 'vue-material-design-icons/PencilOutline.vue'

import IconComponent from '@/components/IconComponent.vue'
// import HelpIcon from 'vue-material-design-icons/Help.vue'
// import ArrowLeftIcon from 'vue-material-design-icons/ArrowLeft.vue'

const newEmialOpen = ref(false)
</script>