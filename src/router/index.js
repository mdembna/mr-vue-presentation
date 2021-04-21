import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/composition',
    name: 'Composition',
    component: () => import('../views/Composition.vue')
  },
  {
    path: '/directive',
    name: 'Directive',
    component: () => import('../views/Directive.vue')
  },
  {
    path: '/custom-directive',
    name: 'CustomDirective',
    component: () => import('../views/CustomDirective.vue')
  },
  {
    path: '/watcher',
    name: 'Watcher',
    component: () => import('../views/Watcher.vue')
  },
  {
    path: '/basic',
    name: 'Basic',
    component: () => import('../views/Basic.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
