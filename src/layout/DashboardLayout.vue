<script lang="ts" setup>
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import MenuBarIcon from "@/assets/icons/IconMenuBar.vue";
import SwitchMode from "@/components/navbar/SwitchMode.vue";
import LocaleDropdown from "@/components/navbar/LocaleDropdown.vue";
import {RectangleGroupIcon} from '@heroicons/vue/20/solid'

</script>
<template>
  <div class="w-[100vw] min-h-[100vh] flex">
    <Sidebar/>
    <div class="main transition-all duration-500 ease-in-out w-[calc(100%-240px)]">
      <nav class="h-[60px] p-4 flex items-center justify-between text-white dark:bg-gray-100 dark:text-primary bg-primary shadow-navbar">
        <MenuBarIcon/>
        <h4>Xamidjonov Islom</h4>
        <div class="flex justify-between items-center">
          <LocaleDropdown/>
          <SwitchMode/>
        </div>
      </nav>
      <div class="bg-primary-darker dark:bg-white text-white h-[calc(100%-60px)]">
        <RectangleGroupIcon class="w-6 h-6"/>

        <router-view/>
      </div>
    </div>
  </div>
</template>




