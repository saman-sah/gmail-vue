<template>
  <div 
    id="EmailView" 
    class="bg-gray-50 h-screen"
  >
    <div class="flex justify-start items-center px-3.5">
      <IconComponent 
        :icon="MenuIcon"
        icon-size="19"
        icon-color="#636363"
        text="dsfsdfsd"
        hover-color="hover:bg-gray-200"
        class="-ml-2 mr-2"
        icon-name="menu"
      />
    </div>
  </div>
</template>

<script setup>
import IconComponent from '@/components/IconComponent.vue';
import MenuIcon from 'vue-material-design-icons/Menu.vue'
</script>