<script lang="ts" setup>
import { toRef } from 'vue'
import SimpleSelect from '@/components/Select/MySelect.vue'
import { useField } from 'vee-validate'

const props = defineProps({
  options: {
    type: Array,
    default: () => [],
    required: true
  },

  multiple: {
    type: Boolean
  },

  taggable: {
    type: Boolean
  },

  label: {
    type: String
  },

  placeholder: {
    type: String
  },

  name: {
    required: true,
    type: String
  },

  valueName: {
    type: String,
    default: 'value'
  },

  clearable: {
    type: Boolean
  },

  required: {
    type: Boolean,
    default: false
  },

  disabled: {
    type: Boolean,
    default: false
  }
})

// Must use `toRef` to make the select names reactive
const name = toRef(props, 'name')
const { value: inputValue, errorMessage, handleChange } = useField(name, undefined)
</script>

<template>
  <SimpleSelect
      :clearable="clearable"
      :error-message="errorMessage"
      :label="label"
      :model-value="inputValue"
      :multiple="multiple"
      :disabled="disabled"
      :options="options"
      :placeholder="placeholder"
      :required="required"
      :value-name="valueName"
      @update:modelValue="handleChange"
  ></SimpleSelect>
</template>
