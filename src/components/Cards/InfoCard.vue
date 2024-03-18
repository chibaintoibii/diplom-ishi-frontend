<template>
  <div
      class="h-[90px] bg-white text-sm md:text-base lg:text-lg dark:bg-dark-500 dark:text-white text-sky-900 p-3 rounded-[10px] flex justify-around items-center hover:scale-105 transition-all duration-200 ease-linear cursor-pointer"
  >
    <component :is="data.iconName" class="md:text-2xl"/>
    <div class="uppercase">{{ data.label }}: </div>
    <div class="font-semibold">{{ data.number }}</div>
  </div>
</template>

<script setup lang="ts">
import {InfoCardItem} from "@/components/Cards/types";

defineProps<{ data: InfoCardItem }>();
</script>

<style scoped>

</style>