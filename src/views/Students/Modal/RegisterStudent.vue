<template>
  <div class="my-2">
    <form @submit="onSubmit">
      <div class="flex gap-x-4 mb-5 min-w-[500px]">
        <VInput required name="username" :placeholder="t('username')" type="text"></VInput>
        <VInput required name="password" :placeholder="t('password')" type="password"></VInput>
        <VInput required name="fullName" :placeholder="t('full_name')" type="text"></VInput>

      </div>
      <div class="flex gap-3 justify-between">
        <VSimpleSelect disabled :label="t('groups.select')" clearable taggable required name="groupId" :options="groups"/>
        <VInput required name="phoneNumber" :placeholder="t('phone_number')" type="text"/>
        <BaseButton type="submit">{{t('save')}}</BaseButton>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">

import BaseButton from "@/components/Button/BaseButton.vue";
import VInput from "@/components/Input/VInput.vue";
import {useI18n} from "vue-i18n";
import VSimpleSelect from "@/components/Select/VSimpleSelect.vue";
import {getGroupsLabels, GroupLabel} from "@/services/http/api/groups";
import {Ref} from "vue";
import {SubmissionContext, useForm} from "vee-validate";
import * as Yup from 'yup'
import {IRegisterStudent, registerStudent} from "@/services/http/api/students";
import {useRoute} from "vue-router";

const route = useRoute()
const {t} = useI18n();

const props = defineProps<{
  onClose?:() => void
}>()

const groupId = route.params.id.toString();

const {data: groups} = getGroupsLabels() as {
  data: Ref<GroupLabel[]>
};

const schema = Yup.object().shape({
  username: Yup.string().required().min(6).max(50),
  password: Yup.string().required().min(6).max(50),
  fullName: Yup.string().required().min(6).max(50),
  phoneNumber: Yup.string().required().min(13).max(13),
  groupId: Yup.string().required('group is required')
})
// +998914431921
const {handleSubmit} = useForm<IRegisterStudent>({
  initialValues: {
    username: '',
    password: '',
    fullName: '',
    phoneNumber: '',
    groupId: groupId
  } as IRegisterStudent,
  validationSchema: schema
})

const {mutate: registerStudentMutation} = registerStudent();
const onSubmit = handleSubmit(async (values: IRegisterStudent, {resetForm}: SubmissionContext) => {
  registerStudentMutation(values, {
    onSuccess: () => {
      console.log('hello');
      resetForm();
      props.onClose?.();
    }
  })
})


</script>

<style scoped>

</style>