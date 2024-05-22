<template>
  <div class="rounded-lg bg-white dark:bg-dark-400 py-3">
    <form @submit="onSubmit" :validation-schema="schema" class="w-full px-4">
      <div class="">
        <div class="mb-5 flex justify-between gap-3">
          <VInput
              type="text"
              :placeholder="'Full name'"
              :label="'Full name'"
              is-required
              :name="'fullName'"
          />
          <VInput
              type="text"
              :placeholder="'username'"
              name="username"
              :label="'Username'"
              is-required
          />
        </div>
        <div class="flex mb-5 justify-between gap-3">
          <VInput
              :placeholder="'password'"
              name="password"
              :label="'password'"
              is-required
              :type="'password'"
          />
          <VInput
              :placeholder="'confirm password'"
              name="confirmPassword"
              :label="'confirm password'"
              is-required
              type="password"
          />
        </div>
        <div class="flex justify-between gap-3">
          <VInput
              type="text"
              name="phoneNumber"
              :label="'Phone Number'"
              is-required
              :placeholder="'+998 (xx) xxx-xx-xx'"
          />

          <BaseButton type="sumbit" class="w-1/2">Save</BaseButton>
        </div>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">

import BaseButton from "@/components/Button/BaseButton.vue";
import {createTeacher} from "@/services/http/api/teachers";
import type {ITeacherForm} from "@/views/Teachers/types";
import {errorToast, successToast} from "@/components/Toast";
import {SubmissionContext, useForm} from "vee-validate";
import * as Yup from 'yup'
import router from "@/router";

const props = defineProps<{
  onClose?:() => void
}>()

const schema = Yup.object().shape({
  password: Yup.string().required('password is required'),
  username: Yup.string().required('username is required'),
  fullName: Yup.string().required('fullName is required'),
  phoneNumber: Yup.string().required('phoneNumber is required'),
  confirmPassword: Yup.string().required().min(6)
      .oneOf([Yup.ref('password')]),
})

const {handleSubmit} = useForm<ITeacherForm>({
  validationSchema: schema
})

const {mutate: doCreateTeacherMutation} = createTeacher();

const onSubmit = handleSubmit(async (values: ITeacherForm, {resetForm}: SubmissionContext) => {

  doCreateTeacherMutation(values, {
    onSuccess: () => {
      console.log('created')
      successToast('Teacher has been created successfully')
      resetForm()
      props.onClose?.();
    },
    onError: (error) => {
      console.log(error.message)
      errorToast(error.message)
    }
  })
})


</script>

<style scoped>

</style>