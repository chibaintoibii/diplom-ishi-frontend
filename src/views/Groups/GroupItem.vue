<template>
  <div v-for="i in 20"
      class="bg-white dark:bg-dark-500 text-sky-900 dark:text-white rounded-lg p-3 flex flex-col justify-between">
    <div class="flex justify-between">
      <div>{{ item.name }}</div>
      <div class="rounded-full flex justify-center items-center p-1 text-sm">{{ item.countOfStudents }}</div>
    </div>
    <div>Teacher: {{ item.attachedTeacher }}</div>
    <div class="flex justify-between items-center text-xs">
      <div class="text-gray-400 ">Created at:
        {{ toDateFormat(item.createdAt) }}
      </div>
      <BaseButton>
        <router-link :to="`/groups/${item._id}/details`">Read more</router-link>
      </BaseButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "@/components/Button/BaseButton.vue";
import {IGroupItem} from "@/views/Groups/types";
import {toDateFormat} from "@/helper/date";

defineProps<{ item: IGroupItem }>()

</script>

<style scoped>

</style>