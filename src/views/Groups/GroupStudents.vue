<script setup lang="ts">

import {getStudents, StudentsItem} from "@/services/http/api/students";
import Loader from "@/components/Loader/Loader.vue";
import BaseTable from "@/components/Table/BaseTable.vue";
import {TableHeader} from "@/components/Table/types";
import {useI18n} from "vue-i18n";
import {Ref} from "vue";
import BaseButton from "@/components/Button/BaseButton.vue";
import {useRegisterStudent} from "@/views/Students/Modal/useRegisterStudent";

const {t} = useI18n();
const props = defineProps<{ groupId: string }>()

const {data, isLoading} = getStudents(props.groupId) as {
  data: Ref<StudentsItem[]>,
  isLoading: Ref<boolean>
}

const headers: TableHeader[] = [
  {
    key: 'id',
    label: '№',
  },
  {
    key: 'fullName',
    label: t('full_name'),
  },
  {
    key: 'username',
    label: t('username'),
  },
  {
    key: 'phoneNumber',
    label: t('phone_number'),
  },
  {
    key: 'gpa',
    label: t('GPA'),
  },
  {
    key: 'edit',
    label: t('edit')
  }
]

function showRegisterStudentModal() {
  useRegisterStudent().open();
}
</script>

<template>
  <div class="w-full p-2">
    <div v-if="isLoading" class="flex justify-center items-center">
      <Loader/>
    </div>
    <div v-else-if="data">
      <div class="mb-4 flex">
        <BaseButton variant="success" @click="showRegisterStudentModal"><i class="fa fa-plus"></i>{{
            t('students.add')
          }}
        </BaseButton>
      </div>
      <BaseTable :headers="headers">
        <template v-if="data.length > 0">
          <tr v-for="(item, index) in data" :key="item._id">
            <td class="text-center">{{ index + 1 }}</td>
            <td class="text-center">{{ item.fullName }}</td>
            <td class="text-center">{{ item.username }}</td>
            <td class="text-center">{{ item.phoneNumber }}</td>
            <td class="text-center">{{ item.gpa }}</td>
            <td class="text-center">
              <BaseButton class="mt-0.5"><i class="fa-solid fa-pen-to-square"></i></BaseButton>
            </td>
          </tr>
        </template>
        <template v-else>
          <tr>
            <td :colspan="headers.length" class="text-center">{{ t('no_data') }}</td>
          </tr>
        </template>
      </BaseTable>
    </div>
  </div>

</template>