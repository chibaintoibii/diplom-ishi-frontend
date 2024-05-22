import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'
import auth from "@/modules/auth";
import PrivateLayout from "@/layout/PrivateLayout.vue";
import LoginPage from "@/layout/LoginPage.vue";
import DisplayContent from "@/components/DisplayContent.vue";

const routes: Array<RouteRecordRaw> = [
  {
    name: 'home',
    path: '/',
    component: PrivateLayout,
    meta: {auth: true},
    children: [

      {
        path: '/test',
        component: DisplayContent
      },

      {
        path: '/groups/:id/details',
        component: () => import('@/views/Groups/GroupDetails.vue'),
        meta: {auth: true}
      }, {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/Dashboard/Home.vue'),
        meta: {auth: true},
      }, {
        path: '/teachers',
        name: 'teachers',
        component: () => import("@/views/Teachers/TeachersList.vue"),
        meta: {auth: true}
      }, {
        path: '/groups',
        name: 'groups',
        component: () => import("@/views/Groups/GroupsList.vue"),
        meta: {auth: true},
        children: []
      },{
        path: '/reports',
        name: 'reports',
        component: () => import('@/views/Groups/GroupReports.vue'),
        meta: {auth: true},
      },{
        path: '/settings',
        name: 'settings',
        component: () => import('@/views/Settings/Profile.vue'),
        meta: {auth: true},
      },
    ]
  },
  {
    name: 'login',
    path: '/auth/login',
    component: LoginPage,
    meta: {auth: false}
  },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    if (!auth.isLoggedIn()) {
      next({
        name: 'login'
      })

      return
    }
  }

  next()
})

export default router




