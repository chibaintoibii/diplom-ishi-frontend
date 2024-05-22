<template>
  <div class="rounded-lg bg-white dark:bg-dark-400 py-3">
    <form class="w-full flex justify-center items-center gap-4">
      <VInput name="name" :placeholder="'Name'" type="text"/>
      <SimpleSelect searchable :options="[]"/>
      <BaseButton>Save</BaseButton>
    </form>
  </div>
</template>

<script setup lang="ts">

import VInput from "@/components/Input/VInput.vue";
import SimpleSelect from "@/components/Select/SimpleSelect.vue";
import BaseButton from "@/components/Button/BaseButton.vue";


</script>

<style scoped>

</style>