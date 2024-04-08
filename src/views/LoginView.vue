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
import axios from 'axios'
import GmailLogin from '../../public/img/GmailLogin.png'

const callback = async(response) => {
  let res = await axios.post('http://localhost:4001/api/google-login', {
    token: response.credential
  })
  console.log('res', res);
}
</script>
