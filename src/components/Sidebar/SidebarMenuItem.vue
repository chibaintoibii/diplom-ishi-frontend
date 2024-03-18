<template>
  <li class="relative cursor-pointer mx-1.5 mb-0.5 dark:text-white hover:text-gray-100 hover:dark:bg-dark-600"
      :class="[$route.path === item.link ? 'text-gray-100 dark:bg-dark-600 bg-sky-900' : 'hover:bg-sky-700 text-sky-900']"
      @click="item.handler"
  >
    <router-link :to="item.link ?? '#'" class="flex items-center h-[40px] relative">
      <div class="flex items-center text-center justify-center w-[40px] absolute left-1">
        <component :is="item.icon"/>
      </div>
      <div class="tracking-wider absolute left-[60px] font-semibold">{{ item.title }}</div>
    </router-link>
  </li>
</template>

<script lang="ts" setup>
import {MenuItem} from "@/types";

defineProps<{
  item: MenuItem
}>()
</script>
<style scoped>

</style>