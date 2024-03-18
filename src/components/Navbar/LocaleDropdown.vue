<template>
  <div class="dropdown relative inline-block cursor-pointer rounded-[7px] w-[70px]">
    <div class="rounded text-white dark:bg-dark-400 bg-sky-600 p-1 text-center tracking-widest">{{currentLocale}} <i class="fa fa-chevron-down"></i></div>
    <div class="dropdown-content">
      <div @click="changeLocale(locale)" v-for="locale in locales" :key="locale.value" class="last:rounded-b first:rounded-t p-1 text-center bg-sky-600 dark:bg-dark-500 dark:hover:bg-dark-400 hover:bg-sky-500 text-white tracking-widest">
        {{ locale.name}}
      </div>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
import {getLocale, setLocale} from "@/helper/locale";

const listLocales = [
  {name: 'Uz', value: 'uz'},
  {name: 'Ru', value: 'ru'},
  {name: 'En', value: 'en'},
]

const locales = computed(() => {
  return listLocales.filter(l => l.value !== locale);
})

const currentLocale = ref('');

const locale = getLocale();
listLocales.forEach(item => {
  if(item.value === locale){
    currentLocale.value = item.name;
  }
})

// console.log(getLocale());
const changeLocale = (locale) => {
  currentLocale.value = locale.name;
  setLocale(locale.value);
  // window.location.reload()
}
</script>

<style scoped>
.dropdown-content {
  display: none;
  position: absolute;
  min-width: 70px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  border-radius: 10px;
  z-index: 1;
}
.dropdown:hover .dropdown-content {
  display: block;
}

</style>