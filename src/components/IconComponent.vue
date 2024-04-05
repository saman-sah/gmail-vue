<template>
  <div 
    id="IconComponent"
  >
    <div :class="[
      hoverColor,
      'flex items-center justify-center rounded-full cursor-pointer w-10 h-10'
      ]"
      :data-tooltip-target="`tooltip-no-arrow-${iconName}`"
      data-tooltip-placement="bottom"
    >
      <component 
        :is="icon"
        :size="iconSize" 
        :fillColor="iconColor"
      />
    </div>
    <div 
      :id="`tooltip-no-arrow-${iconName}`"
      role="tooltip"
      class="inline-block absolute invisible text-xs z-10 py-1 bg-gray-500 px-2 font-medium text-white rounded-sm shadow-sm opacity-0 tooltip darK:bg-gray-600 delay-150"
    >
      {{ text }}
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
defineProps({
  iconColor: {
    type: String,
    default: ''
  },
  iconSize: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  text: {
    type: String,
    default: ''
  },
  hoverColor: {
    type: String,
    default: ''
  },
  iconName: {
    type: String,
    default: ''
  }
})
</script>

