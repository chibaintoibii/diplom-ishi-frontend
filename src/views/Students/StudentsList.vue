<template>
  <div class="flex justify-center items-center">
    <Loader class="mt-5" v-if="isLoading"/>
    <div v-else-if="data" class="w-full p-4">
      <div class="mb-2 flex justify-between w-1/2">
        <div class="w-[250px]">
          <SearchInput v-model="search" :autoFocus="true"/>
        </div>
        <div class="text-xl tracking-wider text-sky-900 font-semibold dark:text-white text-center">Students List</div>
      </div>
      <BaseTable :headers="headers">
        <template v-if="data.length === 0">
          <tr>
            <td class="text-center font-medium text-lg" :colspan="headers.length">
              no data
            </td>
          </tr>
        </template>
        <template v-else>

        </template>

      </BaseTable>

      <div class="mt-0">
        <Pagination
            class="mt-4"
            :last-page="20"
            v-model="page"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

import Loader from "@/components/Loader/Loader.vue";
import {ref} from "vue";
import SearchInput from "@/components/Input/SearchInput.vue";
import BaseTable from "@/components/Table/BaseTable.vue";
import {TableHeader} from "@/components/Table/types";
import Pagination from "@/components/Table/Pagination.vue";

const isLoading = ref(false)
const search = ref('');
const headers = ref<TableHeader[]>([
  {
    label: '№',
    key: "row_num",
    sortable: true
  }, {
    label: 'Full name',
    key: "full_name",
    sortable: true
  },{
    label: 'Username',
    key: "username",
    sortable: true
  }, {
    label: 'Phone number',
    sortable: true,
    key: "phone_number",
  }, {
    label: 'Group name',
    key: "group_name",
    sortable: true,
  }, {
    label: 'Actions',
    key: "actions"

  },
] as TableHeader[])
const data = ref([]);
const page = ref(1)
</script>

<style scoped>

</style>