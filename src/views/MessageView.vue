<template>
  <div
    id="MessageView"
    class="w-full bg-white ml-2 rounded-t-xl h-full shadow-sm"
  >
    <div class="border-b">
      <div class="flex items-center justify-between pr-2">
        <div class="flex">
          <router-link to="/email">
            <IconComponent
              :icon="ArrowLeftIcon"
              icon-color="#636363"
              icon-size="19"
              hover-color="hover:bg-gray-200"
              text="Back to inbox"
              icon-name="back"
            />
          </router-link>
          <IconComponent
            :icon="TrashCanOutlineIcon"
            icon-color="#636363"
            icon-size="19"
            hover-color="hover:bg-gray-200"
            text="Delete"
            icon-name="delete-email"
          />
        </div>
        <div class="text-xs text-gray-500">
          1-50 of 153
        </div>
      </div>
    </div>
    <div class="w-full text-xl ml-20 font-light pt-5">
      Subject
    </div>
    <div class="w-full flex">
      <img
        class="rounded-full mt-8 mx-5 w-[40px] h-[40px]"
        src="https://placehold.co/40x40"
        alt=""
      >
      <div class="w-full my-4 mx-0.5">
        <div class="font-semibold text-sm my-4">
          <div class="w-full flex justify-between items-center">
            <div>saman.sahra@gmail.com</div>
            <div class="mr-5 text-xs font-normal">
              Jun 20 13: 21
            </div>
          </div>
          <span class="text-xs text-gray-500 font-normal">to me</span>
        </div>
        <div class="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import ArrowLeftIcon from 'vue-material-design-icons/ArrowLeft.vue'
import TrashCanOutlineIcon from 'vue-material-design-icons/TrashCanOutline.vue'

import IconComponent from '@/components/IconComponent.vue'
</script>
