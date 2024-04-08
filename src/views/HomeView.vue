<template>
  <div
    id="HomeView"
    class="w-full bg-white ml-2 rounded-t-xl h-full shadow-sm"
  >
    <div class="border-b">
      <div class="flex items-center justify-between px-4 my-3">
        <IconComponent
          class="-m-2 -ml-2.5"
          :icon="TrashCanOutlineIcon"
          icon-color="#636363"
          icon-size="19"
          hover-color="hover:bg-gray-200"
          text="Delete Selected"
        />
        <div class="text-xs text-gray-500">
          1-50 of 153
        </div>
      </div>
    </div>
    
    <div>
      <MessageRow 
        from="saman.sahraei@gmail.com"
        subject="Gmail Clone"
        body="I can do it !!"
        time="Jun 20 11: 32"
      />
    </div>

  </div>
</template>

<script setup>
import TrashCanOutlineIcon from 'vue-material-design-icons/TrashCanOutline.vue'

import IconComponent from '@/components/IconComponent.vue'
import MessageRow from '@/components/MessageRow.vue'
</script>
