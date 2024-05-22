<template>
  <div class="w-full">
    <div class="tab-buttons flex justify-between border-b dark:border-b-white border-b-gray-400">
      <!-- Iterate over tabs and create a button for each -->
      <div
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ 'border-b-2 dark:border-b-white border-b-dark-700': activeTab === index}"
          @click="activeTab = index"
          class="w-full text-center cursor-pointer hover:bg-gray-300 dark:text-white dark:hover:bg-dark-500"
      >
        {{ tab.name }}
      </div>
    </div>
    <!-- Display the content of the active tab -->
    <div class="tab-content mt-4">
      <slot :tab="tabs[activeTab]"></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";

interface TabProps {
  name: string;
}

const activeTab = ref(0);
const props = defineProps<{
  tabs: TabProps[]
}>()
</script>

<style>
</style>
