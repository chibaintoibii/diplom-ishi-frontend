<script lang="ts" setup>
import { RouterView } from 'vue-router';
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import NavBar from "@/components/Navbar/NavBar.vue";
</script>
<template>
  <div class="w-full min-h-[100vh] relative flex">
    <Sidebar class="absolute open h-[100vh]"/>
    <div class="absolute main h-screen overflow-y-auto transition-all duration-300 ease-in-out bg-gray-200 dark:bg-dark-700 ">
      <NavBar/>
      <div class="h-[calc(100vh-60px)]">
        <RouterView/>
      </div>
    </div>
  </div>
</template>




