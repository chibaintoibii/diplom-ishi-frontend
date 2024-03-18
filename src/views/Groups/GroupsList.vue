<script setup lang="ts">
import {computed, ref} from 'vue';
import BaseButton from "@/components/Button/BaseButton.vue";
import SimpleSelect from "@/components/Select/SimpleSelect.vue";
import {MultipleSelectOption} from "@/components/Select/types";
import SearchInput from "@/components/Input/SearchInput.vue";
import {POSITION, useToast} from "vue-toastification";
import GroupItem from "@/views/Groups/GroupItem.vue";
import {IGroupItem} from "@/views/Groups/types";

const toast = useToast();

const selected = ref('1')
const multiSelect = ref([])
const options = computed(() => {
  return [
    {value: '1', label: 'Active'},
    {value: '2', label: 'Inactive'},
  ]
})

const selectedItems = computed<MultipleSelectOption[]>(() => {
  return [
    {value: '1', label: 'Active', selected: false},
    {value: '2', label: 'Inactive', selected: false},
  ]
})

const groupsList = ref<IGroupItem[]>([
  {
    _id: '1',
    name: 'Kif 211-20',
    createdAt: new Date(),
    attachedTeacher: 'Xamidjonov Islom',
    countOfStudents: 22
  }
])

function onclickButton() {
  toast.error("Hi from LogRocket", {
    position: POSITION.TOP_RIGHT,
    timeout: 5000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: false,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    closeButton: "button",
    icon: "fa-regular fa-circle-check",
    rtl: false
  });
}
</script>
<template>
  <div class="container p-4 mx-auto">
    <div class="flex justify-between mb-4">
      <div class="flex gap-6 items-center">
        <SimpleSelect :options="options" v-model="selected"/>
        <SearchInput class="w-[250px]"/>
      </div>
      <BaseButton @click="onclickButton" variant="success" class="self-end text-sm"><i class="fa fa-plus"></i> Create
        new group
      </BaseButton>
    </div>
    <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-5 ">
      <GroupItem v-for="item in groupsList" :item="item" />
    </div>
  </div>

</template>
<style scoped>

</style>