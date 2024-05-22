<template>
  <div class="w-[300px]">
    <VSimpleSelect label="select group" :options="[]"/>
  </div>
</template>

<script setup lang="ts">
import VSimpleSelect from "@/components/Select/VSimpleSelect.vue";

const props = defineProps<{
  groupId: string
}>()
</script>

<style scoped>

</style>