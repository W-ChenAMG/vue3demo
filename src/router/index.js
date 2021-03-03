import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory
  // history模式：createWebHistory
  routes
})

export default router

// import Vue from 'vue'
// import Router from 'vue-router'
// const listDetails = () => import('views/listDetails/listDetails.vue')
// Vue.use(Router)

// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'listDetails',
//       component: listDetails,
//       meta: {
//         keepAlive: true
//       }
//     }
//   ]
// })
