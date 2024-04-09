<template>
  <div
    id="LoginView"
    class="grid h-screen place-items-center"
  >
  <div>
    <img 
      :src="GmailLogin" 
      alt=""
      width="280"
    >
    <div class="flex justify-center">
      <GoogleLogin :callback="callback"/>
    </div>
  </div>
  </div>
</template>

<script setup>
import { useUserStore } from '@/store/userStore'
import GmailLogin from '../../public/img/GmailLogin.png'


const userStore = useUserStore()
const callback = async (response) => {
  await userStore.getUserDetailsFromGoogle(response)
}
</script>
