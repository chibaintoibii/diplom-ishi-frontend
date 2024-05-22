<script setup lang="ts">
import BaseTable from "@/components/Table/BaseTable.vue";
import BaseButton from "@/components/Button/BaseButton.vue";
import {TableHeader, TableSortDirection} from "@/components/Table/types";
import Pagination from "@/components/Table/Pagination.vue";
import {computed, reactive, Ref, ref, toRaw, watch} from "vue";
import {useRoute, useRouter} from "vue-router";
import {useRegisterTeacher} from "@/views/Teachers/Modal/useRegisterTeacher";
import {useI18n} from "vue-i18n";
import {getTeachers, GetTeachersParams, GetTeachersResponse} from "@/services/http/api/teachers";

const route = useRoute()
const router = useRouter()

const {t} = useI18n()

const headers = ref<TableHeader[]>([
  {
    label: '№',
    key: "row_num",
    sortable: true
  }, {
    label: t('full_name'),
    key: "full_name",
    sortable: true
  }, {
    label: t('username'),
    key: "username",
    sortable: true
  }, {
    label: t('phone_number'),
    sortable: true,
    key: "phone_number",
  }, {
    label: t('number_of_groups'),
    key: "number_of_groups",
    sortable: true,
  }, {
    label: t('edit'),
    key: "edit"

  },
] as TableHeader[])

function columnSort(sortOptions: { key: string; sort: TableSortDirection }) {
  headers.value.forEach(el => {
    el.sort = el.key === sortOptions.key ? sortOptions.sort : undefined
  })
}

const currentPage = ref(1);


const {data, isLoading} = getTeachers({
  page: currentPage.value
}) as {
  isLoading: Ref<boolean>,
  data: Ref<GetTeachersResponse>
};

function showRegisterTeacherModal() {
  useRegisterTeacher().open();
}


</script>
<template>
  <div class="w-full p-4" v-if="!isLoading">
    <div class="mb-4 flex justify-between w-full items-center">
      <div class="text-xl tracking-wider text-sky-900 font-semi-bold dark:text-white text-center">
        <span class="font-bold">{{ t('teachers.list') }}</span>
      </div>
      <div>
        <BaseButton @click="showRegisterTeacherModal" variant="success">
          <i class="fa fa-plus"></i>
          {{ t('teachers.add') }}
        </BaseButton>
      </div>
    </div>
    <BaseTable :headers="headers" @sort="columnSort">
      <template v-if="data && data.teachers.length > 0">
        <tr v-for="(teacher, index) in data.teachers" :key="teacher.username" class="">
          <td class="text-center w-10">{{ index + currentPage * 10 - 9 }}</td>
          <td class="text-center">{{ teacher.fullName }}</td>
          <td class="text-center">{{ teacher.username }}</td>
          <td class="text-center">{{ teacher.phoneNumber }}</td>
          <td class="text-center w-[200px]">
            {{ teacher.countOfGroups }}
          </td>
          <td class="text-center w-[5rem]">
            <BaseButton class="mt-0.5"><i class="fa-solid fa-pen-to-square"></i></BaseButton>
          </td>
        </tr>
      </template>
      <template v-else>
        <tr>
          <td class="text-center font-medium text-lg" :colspan="headers.length">
            {{ t('no_data') }}
          </td>
        </tr>
      </template>
    </BaseTable>

    <div class="mt-0">
      <Pagination
          class="mt-4"
          :last-page="20"
          v-model="currentPage"
      />
    </div>
  </div>
  <Loader v-else />
</template>


<style scoped>

</style>