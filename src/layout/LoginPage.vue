<template>
  <div class="w-full min-h-screen bg-gray-200 flex justify-center items-center">
    <div class="sm:w-[400px] w-full h-[560px] bg-white rounded-xl shadow-2xl p-4">
      <h1 class="text-center text-lg text-sky-800 font-bold mb-6 uppercase tracking-wider">Login here</h1>
      <div class="w-full flex justify-center items-center mb-5">
        <img src="@/assets/img/tatu_logo.png" width="200" height="200" alt="">

      </div>
      <form @submit="onSubmit" :validation-schema="schema">
        <VInput class="my-6"
                label="username"
                name="username"
                type="text"
                required
                :placeholder="'username'"
        />
       <VInput :placeholder="'password'"
               class="my-6"
               required
               label="password"
               name="password"
               type="password"
       />
        <BaseButton type="submit" class="w-full">LOGIN</BaseButton>
      </form>
    </div>

  </div>
</template>

<script lang="ts" setup>
import BaseButton from "@/components/Button/BaseButton.vue";
import * as Yup from 'yup'
import {useForm} from "vee-validate";
import {login} from "@/services/http/api/auth";
import router from "@/router";
import {errorToast} from "@/components/Toast";
import VInput from "@/components/Input/VInput.vue";
import Auth from "@/modules/auth";

export interface LoginForm {
  username: string
  password: string
}

const schema = Yup.object().shape({
  username: Yup.string().required('required field username'),
  password: Yup.string().required('required field password')
})

const { handleSubmit } = useForm<LoginForm>({
  validationSchema: schema
})

const { mutate: doLogin } = login()

const onSubmit = handleSubmit(async (values: LoginForm) => {
  doLogin(values, {
    onSuccess: (response) => {
      if (response.data.accessToken) {
        Auth.saveLogin(response.data.accessToken);
        return router.push('/dashboard')

      }
    },
    onError: (error: any) => {
      errorToast(`Unauthorized | 401`)
    }
  })
})

</script>