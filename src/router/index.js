import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/Layout'),
    redirect: '/ ',
    children: [
      {
        path: '/ ',
        component: () => import('@/views/Home')
      },
      {
        path: 'video',
        component: () => import(/* webpackChunkName:'base' */ '@/views/Video')
      },
      {
        path: 'qa',
        component: () => import(/* webpackChunkName:'base' */ '@/views/QA')
      },
      {
        path: 'profile',
        component: () => import('@/views/My')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/Login')
  },
  {
    path: '/search',
    component: () => import(/* webpackChunkName:'search' */'@/views/Search')
  }
]

const router = new VueRouter({
  routes
})

export default router
