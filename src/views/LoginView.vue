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
import { useRouter } from 'vue-router';
import { useUserStore } from '@/store/userStore'

import GmailLogin from '../../public/img/GmailLogin.png'

const router = useRouter()
const userStore = useUserStore()

const callback = async (response) => {
  try {
    await userStore.getUserDetailsFromGoogle(response)
    setTimeout(() => router.push('/email'))
  } catch (error) {
    console.log('error',error);
  }
}
</script>
