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

const menu = computed<MenuItem[]>(() => {
  const menus = [
    {
      title: 'Dashboard',
      link: '/dashboard',
      icon: IconHome
    },
    {
      title: 'Teachers',
      link: '/teachers',
      icon: IconTeacher
    },
    {
      title: 'Students',
      link: '/students',
      icon: IconStudents
    },
    {
      title: 'Groups',
      link: '/groups',
      icon: IconGroup,
    },
    {
      title: 'Reports',
      link: '/reports',
      icon: IconReport
    },
    {
      title: 'Settings',
      link: '/',
      icon: IconSettings,
    },
    {
      title: 'Logout',
      icon: IconLogout,
      link: '/',
      handler: logout
    }
  ]
  return menus;
})


function logout() {
  console.log('logout')
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
.svg-icon {
//width: 2rem; //height: 2rem;
}

.svg-icon path,
.svg-icon polygon,
.svg-icon rect {
//fill: #4691f6; fill: #fff;
}

.svg-icon circle {
  stroke: #4691f6;
  stroke-width: 1;
}

</style>
