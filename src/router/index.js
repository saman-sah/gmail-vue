import { createRouter, createWebHistory } from 'vue-router'
// import { useUserStore } from '@/store/userStore'

import HomeView from '../views/HomeView.vue'
import EmailView from '@/views/template/EmailView.vue'
import MessageView from '@/views/MessageView.vue'
import LoginView from '@/views/LoginView.vue'

const routes = [
  {
    path: '/',
    component: LoginView
  },
  {
    path: '/email',
    // beforeEnter: (to, from, next) => {
    //   useUserStore().email ? next() : next('/')
    // },
    name: 'EmailView',
    component: EmailView,
    children: [
      {
        path: '',
        component: HomeView
      },
      {
        path: 'message',
        component: MessageView
      },
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
