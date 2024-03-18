<template>
  <div class="switch-mode flex items-center justify-between">
    <input v-model="checked" type="checkbox" class="checkbox  opacity-0 absolute" id="checkbox" @change="handleChange">
    <label for="checkbox"
           class="checkbox-label bg-gray-200 dark:bg-dark-600 w-[50px] h-[26px] rounded-[50px] relative p-[5px] cursor-pointer flex items-center justify-between">
      <i class="fa fa-moon text-gray-400 dark:text-white"></i>
      <i class="fa fa-sun dark:text-white"></i>
      <span
          class="ball w-[22px] h-[22px] absolute left-[2px] top-[2px] rounded-full transition-transform duration-100 ease-linear bg-gray-400 dark:bg-white"></span>
    </label>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";

const checked = ref(true);
if(localStorage.getItem('mode') === 'dark') {
  checked.value = false;
}
const handleChange = () => {
  let mode = localStorage.getItem("mode");
  const html = document.querySelector('html') as HTMLElement;
  if (mode == 'dark') {
    html.classList.remove('dark')
    localStorage.setItem("mode", "light")
  } else {
    html.classList.add('dark')
    localStorage.setItem("mode", "dark")
  }
}
</script>

<style scoped>
.checkbox-label {
  //background-color: #1A3247FF;
}

.fa-moon, .fa-sun {
  //color: #fff;
}
.checkbox:checked + .checkbox-label .ball {
  transform: translateX(24px);
}
</style>