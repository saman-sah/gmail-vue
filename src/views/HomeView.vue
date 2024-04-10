<template>
  <div
    id="HomeView"
    class="w-full bg-white ml-2 rounded-t-xl h-full shadow-sm"
  >
    <div class="border-b">
      <div class="flex items-center justify-between px-4 my-3">
        <IconComponent
          @click="deleteSelected"
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
      :id="email.id"
          :from="email.firstName + ' ' + email.lastName"
          :subject="email.subject"
          :body="email.body"
          :time="email.createdAt"
          :hasViewed="email.hasViewed"
          @selectedId="selectedId"
      />
    </div>

  </div>
</template>

<script setup>
  import { onMounted } from 'vue'
  import { useUserStore } from "@/store/userStore"

import TrashCanOutlineIcon from 'vue-material-design-icons/TrashCanOutline.vue'

import MessageRow from '@/components/MessageRow.vue'
import IconComponent from '@/components/IconComponent.vue'

const userStore = useUserStore()

let emailsToDelete = []


onMounted(() => {
    userStore.getEmailsByEmailAddress()
  })

  const selectedId = (e) => {
    if (!emailsToDelete.length) {
      emailsToDelete.push(e.id)
    } else if (e.bool && !emailsToDelete.includes(e.id)) {
      emailsToDelete.push(e.id)
    } else if (!e.bool && emailsToDelete.includes(e.id)) {
      const index = emailsToDelete.indexOf(e.id);
      if (index > -1) { 
        emailsToDelete.splice(index, 1); 
      }
    }
  }

  const deleteSelected = () => {
    if (!emailsToDelete.length) return
    
    let res = confirm("Are you sure you want to delete the selected emails?");
    if (res) { 
      emailsToDelete.forEach(async id => {
        await userStore.deleteEmail(id)
      })

      emailsToDelete = []
    }
  }
</script>
