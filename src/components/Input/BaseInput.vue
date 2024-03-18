<template>
  <div class="min-w-[200px]">
    <label>{{ label }}</label>
    <span v-if="isRequired" class="text-red-700 text-lg">*</span>
    <div class="relative">
      <input
          :type="passwordIsHidden ? 'text' : 'password'"
          :value="modelValue"
          @input="emit('update:modelValue', $event.target.value)"
          :placeholder="placeholder"
          :autofocus="autoFocus"
          class="px-3 py-2 outline-none border focus:border-2 rounded-lg border-gray-300 w-full"
      />
      <i
          v-if="inputType === 'password'"
          class="absolute top-1/3 right-3 cursor-pointer text-gray-400"
          :class="[passwordIsHidden ? 'fa fa-eye-slash': 'fa fa-eye']"
          @click="passwordIsHidden = !passwordIsHidden"
      ></i>
    </div>

  </div>
</template>

<script setup lang="ts">
import {InputProps} from "@/components/Input/types";
import {ref} from "vue";

const props = defineProps<InputProps>();
const passwordIsHidden = ref(true)

const emit = defineEmits(['update:modelValue'])
</script>

<style scoped>

</style>