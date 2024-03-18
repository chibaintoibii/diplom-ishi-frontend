<template>
  <div @click="changeSizeSidebar" class="p-1 cursor-pointer">
    <svg v-if="isOpen" xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor"
         stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-align-left">
      <line x1="17" y1="10" x2="3" y2="10"></line>
      <line x1="21" y1="6" x2="3" y2="6"></line>
      <line x1="21" y1="14" x2="3" y2="14"></line>
      <line x1="17" y1="18" x2="3" y2="18"></line>
    </svg>
    <i v-else class="fa-solid fa-bars" style="font-size: 20px"></i>
  </div>

</template>
<script setup lang="ts">
import {ref} from "vue";

const isOpen = ref(true);
const changeSizeSidebar = () => {
  isOpen.value = !isOpen.value
  const sidebar = document.getElementsByClassName('sidebar')[0] as HTMLElement;
  sidebar.classList.toggle('open');
}
</script>