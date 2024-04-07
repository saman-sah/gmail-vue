<template>
  <div class="flex items-center p-2">
    <div class="min-w-[250px] flex justify-start items-center px-3.5">
      <IconComponent 
        :icon="MenuIcon"
        icon-size="19"
        icon-color="#636363"
        text="Main menu"
        hover-color="hover:bg-gray-200"
        class="-ml-2 mr-2"
        icon-name="menu"
      />
      <img 
        :src="GmailLogin"
        alt=""
        width="107"
      >
    </div>

    <div class="flex w-full justify-between">
      <div class="w-full bg-blue-50 flex items-center p-1 px-2 rounded-full">
        <IconComponent 
          :icon="MagnifyIcon"
          icon-size="19"
          icon-color="#636363"
          text="Search"
          hover-color="hover:bg-gray-200"
          class="-ml-2 mr-2"
          icon-name="magnify"
        />
        <input 
          type="text"
          placeholder="Search mail"
          class="w-full h-10 bg-blue-50 border-transparent border-none focus:ring-0 outline-none placeholder-gray-900"
        >
        <IconComponent 
          :icon="TuneIcon"
          icon-size="19"
          icon-color="#636363"
          text="Show search options"
          hover-color="hover:bg-gray-200"
          class="-ml-2 mr-2"
          icon-name="tune"
        />
      </div>

      <div class="flex w-32 justify-between items-center ml-6">
        <IconComponent 
          :icon="CogOutlineIcon"
          icon-size="19"
          icon-color="#636363"
          text="Settings"
          hover-color="hover:bg-gray-200"
          class="-ml-2 mr-2"
          icon-name="cog"
        />
        <IconComponent 
          :icon="AppsIcon"
          icon-size="19"
          icon-color="#636363"
          text="Google apps"
          hover-color="hover:bg-gray-200"
          class="-ml-2 mr-2"
          icon-name="apps"
        />

        <UserComponent />
      </div>
    </div>
  </div>
</template>

<script setup>
import MenuIcon from 'vue-material-design-icons/Menu.vue'
import AppsIcon from 'vue-material-design-icons/Apps.vue'
import TuneIcon from 'vue-material-design-icons/Tune.vue'
import MagnifyIcon from 'vue-material-design-icons/Magnify.vue'
import CogOutlineIcon from 'vue-material-design-icons/CogOutline.vue'

import GmailLogin from '../../../public/img/GmailLogin.png'

import IconComponent from '@/components/IconComponent.vue'
import UserComponent from '@/components/UserComponent.vue'
</script>
