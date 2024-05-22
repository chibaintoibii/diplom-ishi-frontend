<template>
  <form @submit="onSubmit" class="min-w-[700px] max-w-[1200px] mt-4 min-h-[600px]">
    <div class="flex gap-x-5">
      <VInput type="text"
              name="title"
              class="max-w-[500px]"
              placeholder="Sarlavha"
              v-model="reportForm.title"
              :label="'Title'"
              required
      />
      <div class="min-w-[300px]">
        <VDatePicker
            required
            v-model="reportForm.deadline"
            :placeholder="'Deadline'"
            auto-apply
            :min-date="new Date()"
            :model-type="'yyyy-MM-dd'"
            :format="format"
            name="deadline"
        />
      </div>

    </div>
    <div class="rounded mt-3">
      <RichEditor name="content" title="Hisobot matni" v-model="contentValue"/>
    </div>
    <div class="mt-3">
      <BaseButton @click="onSubmit" type="submit">{{ t('save') }}</BaseButton>
    </div>
    {{ values }}
  </form>
</template>

<script setup lang="ts">

import BaseButton from "@/components/Button/BaseButton.vue";
import RichEditor from "@/components/RichEditor.vue";
import {reactive} from "vue";
import {useI18n} from "vue-i18n";
import {createReports, IReportForm} from "@/services/http/api/reports";
import {useRoute} from "vue-router";
import {errorToast, successToast} from "@/components/Toast";
import VDatePicker from "@/components/Input/VDatePicker.vue";
import VInput from "@/components/Input/VInput.vue";
import {useField, useForm} from "vee-validate";
import * as Yup from 'yup'

const {t} = useI18n()
const route = useRoute();
const reportForm = reactive<IReportForm>({
  content: '',
  title: '',
  groupId: route.params.id.toString(),
  deadline: ''
})
const props = defineProps<{
  onClose?: () => void
}>()

function format(date: Date) {
  const day = date.getDate();
  let month: string = (date.getMonth() + 1).toString();
  if (date.getMonth() < 9) month = '0' + month;
  const year = date.getFullYear();

  return `${year}-${month}-${day}`;
}

const {values, handleSubmit} = useForm({
  initialValues: {
    title: '',
    deadline: '',
    groupId: route.params.id.toString(),
    content: ''
  },
  validationSchema: Yup.object().shape({
    title: Yup.string().required().min(3).max(1000),
    deadline: Yup.string().required(),
  })
})

const {value: contentValue} = useField('content')

const {mutate: createReportsMutation} = createReports()
const onSubmit = handleSubmit(async (values) => {
  console.log(values);
  createReportsMutation(values, {
    onSuccess: () => {
      props.onClose?.();
      successToast('reports are created successfully')
    },
    onError(error) {
      errorToast('Unknown error')
    }
  })
})


</script>

<style>

</style>