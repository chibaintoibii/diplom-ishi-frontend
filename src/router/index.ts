import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    name: 'home',
    path: '/',
    redirect: '/dashboard',
    component: () => import('@/layout/PrivateLayout.vue'),
    meta: {auth: true},
    children: [
      {
        path: '/chart',
        name: 'chart',
        component: () => import('@/views/Dashboard/ChartReports.vue')
      }, {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('@/views/Dashboard/Home.vue')
      }, {
        path: '/teachers',
        name: 'teachers',
        component: () => import("@/views/Teachers/TeachersList.vue")
      }, {
        path: '/students',
        name: 'students',
        component: () => import("@/views/Students/StudentsList.vue")
      }, {
        path: '/groups',
        name: 'groups',
        component: () => import("@/views/Groups/GroupsList.vue"),
        children: []
      }, {
        path: 'groups/:id/details',
        component: () => import('@/views/Groups/GroupDetails.vue')
      }, {
        path: '/reports',
        name: 'reports',
        component: () => import("@/views/Reports/ReportsList.vue")
      }
    ]
  },
  {
    name: 'login',
    path: '/auth/login',
    component: () => import("@/layout/LoginPage.vue"),
    meta: {auth: false}
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
