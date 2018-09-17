import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/components/home')
    },
    {
      path: '/users',
      name: 'Users',
      component: () => import('@/components/users')
    },
    {
      path: '/products',
      name: 'Products',
      component: () => import('@/components/products')
    }
  ]
})
