<script lang="ts" setup>
import BaseButton from "@/components/Button/BaseButton.vue";
import {IGroupItem} from "@/views/Groups/types";
import {toDateFormat} from "@/helper/date";
import {useRouter} from "vue-router";

defineProps<{ item: IGroupItem }>()
const router = useRouter()
</script>
<template>
  <div
      class="bg-white dark:bg-dark-500 text-sky-900 dark:text-white rounded-lg p-3 flex flex-col justify-between">
    <div class="flex justify-between">
      <div>{{ item.name }}</div>
      <div class="rounded-full flex justify-center items-center p-1 text-sm">{{ item.countOfStudents }}</div>
    </div>
    <div>Teacher: {{ item.teacher.fullName }}</div>
    <div class="flex justify-between items-center text-xs">
      <div class="text-gray-400 ">Created at:
        {{ toDateFormat(new Date(item.createdAt)) }}
      </div>
      <div class="flex">
        <BaseButton @click="router.push(`/groups/${item._id}/details`)">
          <i class="fa fa-eye"></i>
        </BaseButton>
      </div>

    </div>
  </div>
</template>


<style scoped>

</style>