<template>
  <div class="w-full max-h-[300px] text-dark-300 cursor-pointer dark:text-white dark:bg-dark-500 bg-white rounded p-2"
  >
    <div class="text-sm ">
      <div><span class="font-bold">Student: </span>{{ item.author }}</div>
      <div><span class="font-bold">Title: </span>{{ item.title }}</div>
      <div><span class="font-bold">Deadline: </span>{{ item.deadline }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {INewReport} from "@/services/http/api/reports";
import {useUser} from "@/modules/user";
const {user} = useUser()
const props = defineProps<{
  item: INewReport
}>()
</script>

<style scoped>

</style>