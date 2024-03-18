<template>
  <div class="max-w-[300px] min-w-[180px] relative bg-white dark:bg-dark-400 dark:text-white rounded-[7px]"
       :class="{active: isVisibleOptions}">
    <div class="flex cursor-pointer items-center h-[38px] border px-4 gap-2 justify-between rounded-[7px]"
         @click="isVisibleOptions = !isVisibleOptions">
      <div>{{ selectedLabel ?? 'Select option' }}</div>
      <i class="fa-solid fa-chevron-down text-gray-400 transition duration-200 ease-linear"
         :class="{'-rotate-180': isVisibleOptions}"></i>
    </div>
    <div class="absolute mt-1 p-3 bg-white dark:bg-dark-400 rounded-[7px] w-full border dark:border-dark-400"
         :class="[isVisibleOptions && props.options?.length > 0 ? 'block': 'hidden']">
      <div class="search relative mb-3" v-if="searchable">
        <SearchInput v-model="search" placeholder="Search"/>
      </div>
      <ul class="options max-h-[250px] overflow-y-auto" v-if="filteredOptions.length > 0">
        <li @click="selectOption(option)"
            class="flex items-center hover:bg-gray-100 hover:rounded dark:hover:bg-dark-500 cursor-pointer border-b dark:border-b-dark-500 last:border-none h-9 p-2"
            v-for="option in filteredOptions" :key="option.value">
          {{ option.label }}
        </li>
      </ul>
      <div v-else class="text-center">No match</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed, PropType, ref} from "vue";
import SearchInput from "@/components/Input/SearchInput.vue";
import {SelectOption} from "@/components/Select/types";

const emit = defineEmits(['update:modelValue'])

const isVisibleOptions = ref(false);
const search = ref('')

const props = defineProps({
  options: {
    type: Array as PropType<Array<SelectOption>>,
    required: true,
    default: () => []
  },
  modelValue: {
    type: String,
    default: null
  },
  searchable: {
    type: Boolean,
    required: false,
    default: false
  }
})

const selectedLabel = computed(() => {
  return props.options.find(i => i.value === props.modelValue)?.label
})

const filteredOptions = computed<SelectOption[]>(() => {
  return props.options?.filter(item => item.label?.toLowerCase().includes(search.value?.toLowerCase()) || search.value === '');
})

function selectOption(option: SelectOption) {
  emit('update:modelValue', option.value)
  isVisibleOptions.value = false;
}

</script>

<style scoped>
.options::-webkit-scrollbar {
  width: 7px;
}

.options::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 25px;
}

.options::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 25px;
}


</style>