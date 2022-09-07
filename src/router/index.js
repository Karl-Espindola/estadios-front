import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/detalles:id',
    name:'detalles',
    component: () => import(/* webpackChunkName: "about" */ '../views/DetallesView.vue')
  },
  {
    path:'/editar:id',
    name:'editar',
    component: () => import(/* webpackChunkName: "about" */ '../views/EditarView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
