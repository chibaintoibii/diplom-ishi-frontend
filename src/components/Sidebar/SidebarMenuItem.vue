<template>
  <li class="flex items-center bg-primary-darker dark:bg-gray-500">
    <router-link :to="item.link ?? '#'" exact class="flex items-center">
      <div class="w-[60px] h-[60px] flex items-center justify-center">
        <component :is="item.icon" class="w-6 h-6"/>
      </div>
      <div class="tracking-widest">{{ item.title }}</div>
    </router-link>
  </li>
</template>

<script lang="ts" setup>
import {MenuItem} from "@/types";

defineProps<{
  item: MenuItem
}>()
</script>