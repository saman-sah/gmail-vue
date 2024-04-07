<template>
  <div class="my-5"></div>
  <div 
    v-for="(item, index) in menuItems"
    :key="index"
  >
    <div :class="[
        !item.status || 'bg-blue-100',
        'w-[250px] flex justify-between items-center px-4 rounded-r-full my-2 cursor-pointer'
      ]"
      @click="item.click"
    >
      <div class="flex items-center justify-start">
        <IconComponent
          :icon="item.icon"
          icon-size="19"
        />
        <div class="text-sm pl-2 font-semibold">
          {{ item.title }}
        </div>
      </div>
      <div class="text-xs font-semibold">
        26
      </div>
    </div>
  </div>
</template>

<script setup>
import InboxIcon from 'vue-material-design-icons/Inbox.vue'
import FileOutlineIcon from 'vue-material-design-icons/FileOutline.vue'
import SentOutlineIcon from 'vue-material-design-icons/SendOutline.vue'
import StarOutlineIcon from 'vue-material-design-icons/StarOutline.vue'
import ClockOutlineIcon from 'vue-material-design-icons/ClockOutline.vue'

import IconComponent from '@/components/IconComponent.vue';

const menuItems = [
  {
    icon: InboxIcon,
    title: 'Inbox',
    status: true,
    click: () => selectItemMenu('inbox')
  },
  {
    icon: StarOutlineIcon,
    title: 'Starred',
    status: false
  },
  {
    icon: ClockOutlineIcon,
    title: 'Snoozed',
    status: false
  },
  {
    icon: SentOutlineIcon,
    title: 'Sent',
    status: false
  },
  {
    icon: FileOutlineIcon,
    title: 'Drafts',
    status: false
  }
]

const selectItemMenu = (component) => {
  console.log(component);
}
</script>
