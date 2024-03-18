<script setup lang="ts">
import BaseTable from "@/components/Table/BaseTable.vue";
import BaseButton from "@/components/Button/BaseButton.vue";
import {TeacherListItem} from "@/views/Teachers/types";
import {TableHeader, TableSortDirection} from "@/components/Table/types";
import SearchInput from "@/components/Input/SearchInput.vue";
import Pagination from "@/components/Table/Pagination.vue";
import {ref, watch} from "vue";
import {useRoute} from "vue-router";
import CreateTeacherModal from "@/components/Modals/CreateTeacherModal.vue";

const route = useRoute()

const currentPage = ref(route.query.page || 1);
const search = ref(route.query.search || '');

const teachers: TeacherListItem[] = [
  {
    fullName: 'Iskandarova Sayyora Nurmamatovna',
    countOfGroups: 8,
    phoneNumber: '+998 99 123-45-67',
    username: 'sayyoraiskandarova'
  }, {
    fullName: 'SAYDAZIMOV JAVLONBEK KARIMOVICH',
    countOfGroups: 5,
    phoneNumber: '+998 99 123-45-68',
    username: 'studyhardlyyy'
  }, {
    fullName: 'SAYDAZIMOV JAVLONBEK KARIMOVICH',
    countOfGroups: 5,
    phoneNumber: '+998 99 123-45-68',
    username: 'studyhardlyyy'
  }, {
    fullName: 'SAYDAZIMOV JAVLONBEK KARIMOVICH',
    countOfGroups: 5,
    phoneNumber: '+998 99 123-45-68',
    username: 'studyharfsagfadlyyy'
  }, {
    fullName: 'SAYDAZIMOV JAVLONBEK KARIMOVICH',
    countOfGroups: 5,
    phoneNumber: '+998 99 123-45-68',
    username: 'studyhsgdsgardlyyy'
  }, {
    fullName: 'SAYDAZIMOV JAVLONBEK KARIMOVICH',
    countOfGroups: 5,
    phoneNumber: '+998 99 123-45-68',
    username: 'studyhardlyyy'
  }, {
    fullName: 'SAYDAZIMOV JAVLONBEK KARIMOVICH',
    countOfGroups: 5,
    phoneNumber: '+998 99 123-45-68',
    username: 'studyhsgdsgardlyyy'
  }, {
    fullName: 'SAYDAZIMOV JAVLONBEK KARIMOVICH',
    countOfGroups: 5,
    phoneNumber: '+998 99 123-45-68',
    username: 'studyhsgdsgardlyyy'
  }, {
    fullName: 'SAYDAZIMOV JAVLONBEK KARIMOVICH',
    countOfGroups: 5,
    phoneNumber: '+998 99 123-45-68',
    username: 'studyhardlyyy'
  }, {
    fullName: 'SAYDAZIMOV JAVLONBEK KARIMOVICH',
    countOfGroups: 5,
    phoneNumber: '+998 99 123-45-68',
    username: 'studyhsgdsgardlyyy'
  }, {
    fullName: 'SAYDAZIMOV JAVLONBEK KARIMOVICH',
    countOfGroups: 5,
    phoneNumber: '+998 99 123-45-68',
    username: 'studyhardlyyy'
  }, {
    fullName: 'SAYDAZIMOV JAVLONBEK KARIMOVICH',
    countOfGroups: 5,
    phoneNumber: '+998 99 123-45-68',
    username: 'studyhsgdsgardlyyy'
  }, {
    fullName: 'SAYDAZIMOV JAVLONBEK KARIMOVICH',
    countOfGroups: 5,
    phoneNumber: '+998 99 123-45-68',
    username: 'studyhsgdsgardlyyy'
  }
]

const headers = ref<TableHeader[]>([
  {
    label: '№',
    key: "row_num",
    sortable: true
  }, {
    label: 'Full name',
    key: "full_name",
    sortable: true
  }, {
    label: 'Username',
    key: "username",
    sortable: true
  }, {
    label: 'Phone number',
    sortable: true,
    key: "phone_number",
  }, {
    label: 'Number of groups',
    key: "number_of_groups",
    sortable: true,
  }, {
    label: 'Actions',
    key: "actions"

  },
] as TableHeader[])

function columnSort(sortOptions: { key: string; sort: TableSortDirection }) {
  headers.value.forEach(el => {
    el.sort = el.key === sortOptions.key ? sortOptions.sort : undefined
  })
}

watch(search, (value) => {
  route.query.search = value;
})

const isOpenModal = ref(false);

function onCreateTeacher() {
  isOpenModal.value = !isOpenModal.value
}

function onCloseModal() {
  isOpenModal.value = !isOpenModal.value

}
</script>
<template>
  <div class="w-full p-4">
    <CreateTeacherModal v-if="isOpenModal" @close-modal="onCloseModal" :is-open="isOpenModal"/>
    <div class="mb-4 flex justify-between w-full items-center">
      <div class="w-[250px]">
        <SearchInput v-model="search" :autoFocus="true"/>
      </div>
      <div class="text-xl tracking-wider text-sky-900 font-semibold dark:text-white text-center">Teachers List</div>
      <div>
        <BaseButton @click="onCreateTeacher" variant="success">
          <i class="fa fa-plus"></i>
          Add new teacher
        </BaseButton>
      </div>
    </div>
    <BaseTable :headers="headers" @sort="columnSort">
      <template v-if="true">
        <tr v-for="(teacher, index) in teachers" :key="teacher.username" class="">
          <td class="text-center w-[50px]">{{ index + currentPage * 10 - 9 }}</td>
          <td class="text-center">{{ teacher.fullName }}</td>
          <td class="text-center">{{ teacher.username }}</td>
          <td class="text-center">{{ teacher.phoneNumber }}</td>
          <td class="text-center underline w-[11rem]">
            <router-link to="#">{{ teacher.countOfGroups }}</router-link>
          </td>
          <td class="text-center w-[5rem]">
            <BaseButton><i class="fa-solid fa-pen-to-square"></i></BaseButton>
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
</template>


<style scoped>

</style>