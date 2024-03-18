<template>
  <div class="grid grid-cols-5 p-3 gap-3">
    <div class="col-span-2">
      <div class="border p-4 grid grid-cols-2 bg-white rounded-lg">
        <div class="mb-4">Group name:</div>
        <div>{{data.name}}</div>
        <div class="mb-4">Attached Teacher:</div>
        <div>{{data.attachedTeacher}}</div>
        <div class="mb-4">Created At:</div>
        <div>{{toDateFormat(data.createdAt)}}</div>

      </div>

    </div>
    <div class="col-span-3">
      <div class="text-center mb-3">List of Students</div>
      <BaseTable :headers="tableHeaders" :sub-headers="subHeaders">
        <template v-if="data && data.students.length > 0">
          <tr v-for="(student, index) in data.students" :key="student._id">
            <td class="text-center">{{index + 1}}</td>
            <td class="text-center">{{student.fullName}}</td>
            <td class="text-center">{{student.submittedReports}}</td>
            <td class="text-center">{{student.estimatedReports}}</td>
            <td class="text-center">{{student.backlogReports}}</td>
            <td class="text-center">
              <BaseButton><i style="font-size: 10px" class="fas fa-pen"></i></BaseButton>
            </td>
          </tr>
        </template>
        <template v-else>
          <tr>
            <td class="text-center" :colspan="tableHeaders.length + subHeaders.length">No data</td>
          </tr>
        </template>
      </BaseTable>
    </div>

  </div>
</template>

<script setup lang="ts">
import {useRoute} from "vue-router";
import {reactive, ref} from "vue";
import {IGroupDetails} from "@/views/Groups/types";
import BaseTable from "@/components/Table/BaseTable.vue";
import {TableHeader} from "@/components/Table/types";
import BaseButton from "@/components/Button/BaseButton.vue";
import {toDateFormat} from "@/helper/date";

const route = useRoute()
const tableHeaders = reactive<TableHeader[]>([
  {
    key: '№',
    label: '№',
    rowspan: 2
  },
  {
    key: 'name',
    label: 'Name',
    rowspan: 2
  },
  {
    key: 'submitted_reports',
    label: 'Reports',
    colspan: 3,
  },

  {
    key: 'actions',
    label: 'Actions',
    rowspan: 2
  }
])

const subHeaders = reactive<TableHeader[]>([
  {
    key: 'submitted',
    label: 'Submitted',
  },
  {
    key: 'estimated',
    label: 'Estimated'
  },
  {
    key: 'backlog',
    label: 'Backlog',
  },
])

const data = reactive<IGroupDetails>({
  _id: '13',
  createdAt: new Date(),
  attachedTeacher: 'Qosimov Sherzod',
  name: 'AXF-231-23',
  countOfStudents: 24,
  students: []
})
</script>

<style scoped>

</style>