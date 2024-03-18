<template>
  <nav
      class="sticky border-l dark:border-l-dark-400 top-0 z-10 h-[60px] bg-white text-black dark:bg-dark-500 px-3 flex justify-between items-center shadow-navbar rounded-bl-sm">
    <div class="flex items-center gap-4">
      <MenuBarIcon class="text-sky-900 dark:text-white"/>
    </div>

    <div class="flex gap-4 items-center">
      <div class="font-bold tracking-wider text-sky-900 dark:text-white" style="font-size: 12px">
        <div class="text-right p-0 m-0">Islom</div>
        <div>Xamidjonov</div>
      </div>
      <div class="relative cursor-pointer">
        <div
            class="absolute flex items-center justify-center bg-red-500 font-bold rounded-full text-white left-[10px] w-4 h-4"
            style="font-size: 9px;"><span>13</span>
        </div>
        <i class="fa-regular fa-bell text-sky-900 dark:text-white" style="font-size: 26px"></i>
      </div>

<!--      <locale-dropdown/>-->
      <SimpleSelect class="border dark:border-dark-400" :options="listLocales" v-model="locale"/>
      <switch-mode/>
    </div>

  </nav>
</template>

<script setup lang="ts">

import SwitchMode from "@/components/Navbar/SwitchMode.vue";
import MenuBarIcon from "@/assets/icons/IconMenuBar.vue";
import SimpleSelect from "@/components/Select/SimpleSelect.vue";
import LocaleDropdown from "@/components/Navbar/LocaleDropdown.vue";
import {computed, ref, watch} from "vue";
import {SelectOption} from "@/components/Select/types";
import {getLocale, setLocale} from "@/helper/locale";

const listLocales = computed<SelectOption[]>(() => {
  return [
    {label: 'Uzbek', value: 'uz'},
    {label: 'Russian', value: 'ru'},
    {label: 'English', value: 'en'},
  ]
})

const locale = ref(getLocale())

watch(locale, (newLocale) => {
  setLocale(newLocale || 'uz');
  window.location.reload();
})
</script>

<style scoped>

</style>