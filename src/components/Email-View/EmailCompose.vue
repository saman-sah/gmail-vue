<template>
  <div class="w-[560px] h-[570px] absolute bottom-0 right-0 mr-20 rounded-t-lg shadow-2xl bg-white">
    <div class="flex items-center justify-between rounded-t-lg w-full text-sm px-3.5 py-0.5 bg-blue-50">
      <div>New Message</div>
      <IconComponent
        @click="value = false"
        :icon="CloseIcon"
        iconSize="25"
      />
    </div>
    <div>
      <div class="relative flex items-center px-3.5 py-2">
        <div class="text-sm text-gray-700">
          To
        </div>
        <input
          type="text"
          class="w-full h-6 border-transparent border-none focus:ring-0 outline-none"
        >
        <div class="absolute border-b w-[calc(100%-30px)] bottom-0"></div>
      </div>
      <div class="relative flex items-center px-3.5 py-2">
        <div class="text-sm text-gray-700">
          Subject
        </div>
        <input
          type="text"
          class="w-full h-6 border-transparent border-none focus:ring-0 outline-none"
        >
        <div class="absolute border-b w-[calc(100%-30px)] bottom-0"></div>
      </div>
      <div>
        <textarea
          rows="14"
          class="w-full h-[calc(100% - 100px)] border-transparent border-none focus:ring-0 outline-none resize-none"
        />
      </div>
      <div class="p-4 mt-5">
        <button
          class="bg-blue-700 hover:bg-blue-600 text-white text-sm font-bold py-2 px-4 rounded-full"
        >
          Send Message
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, useModel } from 'vue'
// import { useModel } from '@vueuse/core'
import CloseIcon from 'vue-material-design-icons/Close.vue'

import IconComponent from '@/components/IconComponent.vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const value = useModel(props, 'modelValue')
</script>