<template>
  <div id="MessageRow">
    <div class="border-b cursor-pointer hover:border-gray-200 hover:border-t hover:border-y-2 hover:border-x">
      <div class="flex items-center ml-2">
        <div class="flex items-center">
          <IconComponent
            :icon="CheckboxBlankOutlineIcon"
            icon-color="#636363"
            icon-size="19"
          />
          <IconComponent
            :icon="StarOutlineIcon"
            icon-color="#636363"
            icon-size="19"
          />
        </div>

        <div class="flex items-center w-full">
          <router-link 
            class="w-full"
            to="email/message"
          >
            <div class="flex items-center justify-between">
              <div class="flex items-center w-full">
                <div class="text-sm ml-4 font-normal mr-2 w-[170px] truncate">
                  {{ from }}
                </div>
                <div class="flex items-center justify-between">
                  <div class="mr-1.5 text-sm font-medium max-w-[200px] truncate">
                    {{ subject }}
                  </div>
                  <div class="mr-1.5 text-sm font-normal text-gray-500 max-w-[400px] truncate">
                    | {{ body }} ...
                  </div>
                </div>
              </div>
              <div class="text-right truncate mr-4 w-full text-xs font-normal">
                {{ time }}
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { toRefs, defineProps } from 'vue'
import CheckboxBlankOutlineIcon from 'vue-material-design-icons/CheckboxBlankOutline.vue'
import StarOutlineIcon from 'vue-material-design-icons/StarOutline.vue'

import IconComponent from '@/components/IconComponent.vue'

const props= defineProps({
  from: {
    type: String,
    default: ''
  },
  subject: {
    type: String,
    default: ''
  },
  body: {
    type: String,
    default: ''
  },
  time: {
    type: String,
    default: ''
  }
})

const { from, subject, body, time } = toRefs(props)
</script>
