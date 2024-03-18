<template>
  <div class="fixed h-full z-30 left-0 top-0 w-full bg-[rgba(0,0,0,0.4)]"
       :class="[props.isOpen ? 'block': 'hidden']">
    <div
        class="w-[50%] top-10 left-[25%] rounded-lg bg-white dark:bg-gray-700 absolute animate-modal">
      <!--  start header section -->
      <div class="flex justify-between h-12 items-center pl-5 py-2 pr-3 rounded-t-lg bg-blue-700 text-white">
        <div class="font-bold tracking-wider">Register new Teacher</div>
        <div @click="emit('close-modal')" class="cursor-pointer rounded-full hover:text-red-700 w-6 h-6 flex justify-center items-center text-2xl font-bold">&times</div>
      </div>
      <!--      end header section-->

      <!--      start content section-->
      <form @submit.prevent="" class="grid grid-cols-3 gap-4 w-full my-3 px-4">
        <div class="col-span-2 grid grid-cols-2 gap-4">
          <BaseInput
              v-model="teacherForm.fullName"
              :label="'Full name'"
              is-required class=""
          />
          <BaseInput
              v-model="teacherForm.username"
              :label="'Username'"
              is-required class=""
              :auto-focus="true"
          />
          <BaseInput
              v-model="teacherForm.password"
              :label="'password'"
              is-required class=""
              input-type="password"
          />
          <BaseInput
              v-model="teacherForm.confirmPassword"
              :label="'confirm password'"
              is-required class=""
              input-type="password"
          />


          <BaseInput
              v-model="teacherForm.phoneNumber"
              :label="'Phone Number'"
              is-required
              :placeholder="'+998 (91) 443-19-21'"
              class=""
          />
        </div>
        <div
            class="rounded-lg flex flex-col justify-center items-center cursor-pointer"
            :class="{'bg-[rgba(0,0,0,0.1)]': !imageUrl}"
        >
          <label class="cursor-pointer">
            <img :src="imageUrl" class=" object-cover rounded-lg bg-center" v-if="imageUrl" alt="image"/>
            <span class="text-center flex items-center justify-between gap-3" v-else>
              <i class="fas fa-3x fa-camera-retro"></i> Rasm yuklang
            </span>

            <input class="hidden" type="file" accept="image/jpeg" @change=uploadImage>
          </label>
        </div>



      </form>
      <!--      end content section-->

      <div class="h-[50px] bg-gray-300 rounded-b-lg p-3 flex justify-center flex-col">
        <BaseButton class="self-end">Save</BaseButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import BaseInput from "@/components/Input/BaseInput.vue";
import {reactive, ref} from "vue";
import BaseButton from "@/components/Button/BaseButton.vue";

const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const file = ref<File | null>();
const imageUrl = ref<string | null | ArrayBuffer>()

function uploadImage($event: Event) {
  const target = $event.target as HTMLInputElement;
  if (target && target.files) {
    file.value = target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      imageUrl.value = reader.result;
    };
    reader.readAsDataURL(file.value);
  }
}

const teacherForm = reactive({
  username: '',
  password: '',
  confirmPassword: '',
  fullName: '',
  phoneNumber: ''
})

const emit = defineEmits(['close-modal'])

function closeModal(event: KeyboardEvent) {
  if (event.key === 'Escape') {
    emit('close-modal')

    event.preventDefault()
    event.stopPropagation()
  }
}

</script>

<style scoped>
@keyframes modal {
  0% {
    transform: translateY(-50%);
    opacity: 0;
    animation-timing-function: linear;
  }
  100% {
    opacity: 1;
    transform: none;
    animation-timing-function: ease-out;
  }
}

.animate-modal {
  animation: modal 0.4s ease-out;
}
</style>