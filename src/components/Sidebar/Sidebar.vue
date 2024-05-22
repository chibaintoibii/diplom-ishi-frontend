<script lang="ts" setup>
import SidebarLogo from "@/components/Sidebar/SidebarLogo.vue";
import SidebarMenuItem from "@/components/Sidebar/SidebarMenuItem.vue";
import {computed} from "vue";
import {MenuItem} from "@/types";
import IconHome from "@/assets/icons/IconHome.vue";
import IconUser from "@/assets/icons/IconUser.vue";
import IconStudents from "@/assets/icons/IconStudents.vue";
import IconStatistics from "@/assets/icons/IconStatistics.vue";
import IconSettings from "@/assets/icons/IconSettings.vue";
import IconLogout from "@/assets/icons/IconLogout.vue";
import IconGroup from "@/assets/icons/IconGroup.vue";
import IconTeacher from "@/assets/icons/IconTeacher.vue";
import IconReport from "@/assets/icons/IconReport.vue";
import auth from "@/modules/auth";
import {useI18n} from "vue-i18n";
import {useUser} from "@/modules/user";

const {t} = useI18n();

const {isAdmin, isTeacher} = useUser();

const menu = computed<MenuItem[]>(() => {
  const menus = [
    {
      title: t('settings.title'),
      link: '/settings',
      icon: IconSettings,
    },
    {
      title: t('logout'),
      icon: IconLogout,
      link: '/',
      handler: logout
    }
  ]

  if (isTeacher.value || isAdmin.value) {
    menus.unshift({
      title: t('groups.title'),
      link: '/groups',
      icon: IconGroup,
    })
  } else {
    menus.unshift({
      title: t('reports.title'),
      link: '/reports',
      icon: IconReport
    })
  }

  if (isAdmin.value) {
    menus.unshift({
      link: '/teachers',
      icon: IconTeacher,
      title: t('teachers.title')
    })
  }

  menus.unshift({
    title: t('dashboard.title'),
    link: '/dashboard',
    icon: IconHome
  })
  return menus;
})


function logout() {
  auth.logout()
}
</script>
<template>
  <div
      class="transition-all h-screen duration-300 overflow-x-hidden ease-in-out sidebar bg-white dark:bg-dark-500 w-[240px]"
  >

    <SidebarLogo/>
    <ul class="list-none relative h-[calc(100vh-100px)]">
      <SidebarMenuItem v-for="item in menu" :key="item.title" :item="item"/>
    </ul>
  </div>
</template>
<style>
.svg-icon circle {
  stroke: #4691f6;
  stroke-width: 1;
}

</style>
