<template>
  <div class="">
    <VueDatePicker v-model="date" :enable-time-picker="false"></VueDatePicker>
    {{date}}

  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";

const date = ref();

</script>

<style scoped>

</style>