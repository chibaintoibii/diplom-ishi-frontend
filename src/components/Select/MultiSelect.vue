<template>
  <div class="max-w-[300px] min-w-[180px] relative bg-white dark:bg-dark-400 dark:text-white rounded-[7px]"
       :class="{active: isVisibleOptions}">
    <div class="flex cursor-pointer items-center h-[45px] border px-[15px] gap-2 justify-between rounded-[7px]"
         @click="isVisibleOptions = !isVisibleOptions">
      <div>{{ selectedCount > 0 ? `${selectedCount} selected` : 'Select options' }}</div>
      <i class="fa-solid fa-chevron-down text-gray-400 transition duration-200 ease-linear"
         :class="{'-rotate-180': isVisibleOptions}"></i>
    </div>
    <div class="absolute mt-1 p-2 bg-white dark:bg-dark-400 rounded-[7px] w-full border dark:border-dark-400"
         :class="[isVisibleOptions && props.options?.length > 0 ? 'block': 'hidden']">
      <div class="search relative mb-3" v-if="searchable">
        <SearchInput v-model="search" placeholder="Search"/>
      </div>
      <ul class="options max-h-[250px] overflow-y-auto" v-if="filteredOptions.length > 0">
        <li @click="onSelectOption(option)"
            class="flex items-center gap-3 hover:bg-gray-100 hover:rounded dark:hover:bg-dark-500 cursor-pointer border-b dark:border-b-dark-500 last:border-none h-10 px-2"
            v-for="option in filteredOptions" :key="option.value">
          <div class="flex h-5 w-5 justify-center items-center p-2 border-2 text-xs"
               :class="[option.selected ? 'text-white bg-blue-700' : '']"><i v-show="option.selected"
                                                                             class="fa-solid fa-check"></i></div>
          <div>{{ option.label }}</div>
        </li>
      </ul>
      <div v-else class="text-center">No match</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {computed, PropType, ref, watch} from "vue";
import SearchInput from "@/components/Input/SearchInput.vue";
import {MultipleSelectOption} from "@/components/Select/types";

const emit = defineEmits(['update:modelValue'])

const isVisibleOptions = ref(false);
const search = ref('')

const props = defineProps<{
  modelValue: string[]
  options: MultipleSelectOption[]
  searchable?: boolean
}>()
const selectedItems = ref<string[]>(props.modelValue)


const selectedCount = computed(() => {
  return props.modelValue?.length;
})

const filteredOptions = computed<MultipleSelectOption[]>(() => {
  const options = props.options?.filter(item => item.label?.toLowerCase().includes(search.value?.toLowerCase()) || search.value === '');
  options.forEach(item => {
    if (selectedItems.value.includes(item.value))
      item.selected = true;
  })
  return options;
})

function onSelectOption(option: MultipleSelectOption) {
  filteredOptions.value.forEach(item => {
    if (option.value === item.value) item.selected = !item.selected;
  })
  let index = selectedItems.value.indexOf(option.value);
  if (index > -1) selectedItems.value.splice(index, 1);
  else selectedItems.value.push(option.value);
  emit('update:modelValue', selectedItems.value);
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