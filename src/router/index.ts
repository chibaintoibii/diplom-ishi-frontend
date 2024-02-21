import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import DashboardLayout from "@/layout/DashboardLayout.vue";
import LoginPage from "@/layout/LoginPage.vue";

const routes: Array<RouteRecordRaw> = [
  {
    name: 'home',
    path: '/',
    component: DashboardLayout,
    meta: {auth: true},
    children: []
  },
  {
    name: 'login',
    path: '/auth/login',
    component: LoginPage,
    meta: {auth: false}
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
