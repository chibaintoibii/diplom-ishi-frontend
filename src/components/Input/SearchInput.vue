<template>
  <div class=" flex items-center relative">
    <div class="absolute left-2 text-gray-400">
      <i class="fa-solid fa-magnifying-glass"></i>
    </div>

    <input
        :value="props.modelValue"
        @input="emit('update:modelValue', $event.target.value)"
        type="text"
        :placeholder="'Search'"
        class="pl-8 outline-none border-2 border-gray-300 focus:border-2 focus:border-gray-400 dark:bg-dark-400 dark:text-white rounded-lg !block w-full py-1.5 px-3.5"

    />
  </div>
</template>

<script setup lang="ts">

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    type: String,
  },
  autoFocus: {
    type: Boolean,
    default: false
  }
})

</script>

<style scoped>

</style>