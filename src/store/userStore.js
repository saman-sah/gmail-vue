import { defineStore } from 'pinia'
import { reactive } from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4001'

export const useUserStore = defineStore('user', () => {
  const user = reactive({
    sub: '',
    email: '',
    picture: '',
    firstName: '',
    lastName: '',
  })

  async function getUserDetailsFromGoogle(data) {
    console.log('data',data);
    let res = await axios.post('/api/google-login', {
      token: data.credential
    })
    user.sub = res.data.sub
    user.email = res.data.email
    user.picture = res.data.picture
    user.firstName = res.data.given_name
    user.lastName = res.data.family_name
  }

  return {
    user,
    getUserDetailsFromGoogle
  }

})