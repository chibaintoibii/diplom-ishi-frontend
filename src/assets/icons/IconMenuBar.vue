<template>
  <div @click="changeSizeSidebar" class="p-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
         stroke-width="1.5"
         stroke="currentColor"
         class="w-6 h-6 cursor-pointer">
      <path stroke-linecap="round" stroke-linejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"/>
    </svg>
  </div>

</template>
<script setup lang="ts">
const changeSizeSidebar = () => {
  const sidebar = document.getElementsByClassName('sidebar')[0] as HTMLElement;
  if(sidebar.classList.contains('w-[240px]')) {
    sidebar.classList.remove('w-[240px]');
    sidebar.classList.add('w-[60px]')
  } else {
    sidebar.classList.remove('w-[60px]')
    sidebar.classList.add('w-[240px]');
  }
  const main = document.getElementsByClassName('main')[0] as HTMLElement;
  if(main.classList.contains('w-[calc(100%-240px)]')) {
    main.classList.remove('w-[calc(100%-240px)]');
    main.classList.add('w-[calc(100%-60px)]')
  } else {
    main.classList.remove('w-[calc(100%-60px)]');
    main.classList.add('w-[calc(100%-240px)]')
  }
}
</script>