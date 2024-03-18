<template>
  <div
      v-show="lastPage > 1"
      class="inline-flex justify-center text-sky-900 border border-sky-900 dark:border-gray-400 bg-white dark:bg-dark-400 dark:text-gray-200 rounded-lg"
  >
    <button
        class="px-3 rounded-l-lg dark:disabled:bg-dark-500 disabled:bg-gray-300"
        :class="{'cursor-pointer': modelValue !== 1}"
        :disabled="modelValue === 1"
        @click="setPage(1)"
    >
      «
    </button>

    <button
        class="px-3 py-1 border-x dark:border-x-gray-400 border-x-sky-900 dark:disabled:bg-dark-500 disabled:bg-gray-300"
        :disabled="modelValue === 1"
        :class="{'cursor-pointer': modelValue !== 1}"
        @click="setPage(Math.max(modelValue - 1, 1))"
    >
      ‹
    </button>

    <button
        v-for="page in pages"
        :key="page"
        :class="{
        'bg-sky-900 text-white dark:bg-white dark:text-black':
          page === modelValue,
        'hover:dark:bg-white hover:dark:text-black hover:bg-sky-900 hover:text-white cursor-pointer border-r dark:border-gray-400 border-sky-900': typeof page === 'number'
      }"
        class="px-3"
        @click="typeof page === 'number' && setPage(page)"
        v-html="page"
    />

    <button
        class="px-3 py-1 border-r dark:disabled:bg-dark-500 disabled:bg-gray-300 border-sky-900 dark:border-gray-400"
        :disabled="modelValue === lastPage"
        :class="{'cursor-pointer': modelValue !== lastPage}"
        @click="setPage(Math.min(modelValue + 1, lastPage))"
    >
      ›
    </button>

    <button
        :disabled="modelValue === lastPage"
        :class="{'cursor-pointer': modelValue !== lastPage}"
        class="px-3 dark:disabled:bg-dark-500 disabled:bg-gray-300 rounded-r-lg"
        @click="setPage(lastPage)"
    >
      »
    </button>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const emit = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    type: Number,
    required: true
  },
  lastPage: {
    type: Number,
    required: true
  },
  eachSide: {
    type: Number,
    default: 2
  }
})

function setPage(page: number) {
  emit('update:modelValue', page)
}

const pages = computed(() => {
  const pages = []

  if(props.lastPage <= props.eachSide * 2 + 1) {
    for(let i = 1; i <= props.lastPage; i ++){
      pages.push(i);
    }

  } else {
    if(props.modelValue <= props.eachSide + 1){
      for(let i = 1; i <= Math.min(props.lastPage, props.eachSide * 2 + 1); i ++){
        pages.push(i);
      }

    }
    else if(props.lastPage - props.modelValue < props.eachSide){
      for(let i = 0; i <= 2 * props.eachSide; i ++){
        pages.unshift(props.lastPage - i);
      }
    }
    else {
      for(let i = props.modelValue - props.eachSide; i <= props.modelValue + props.eachSide; i ++){
        pages.push(i);
      }
    }
  }

  return pages
})
</script>