<template>
  <div class="mx-auto">
    <div class="">
      <table class="w-full text-xs table-auto text-sky-950 dark:text-white overflow-x-auto">
        <thead>
        <tr class="bg-white dark:bg-dark-400 ">
          <th
              v-for="(header, index) in props.headers"
              :key="index"
              :colspan="header.colspan"
              :rowspan="header.rowspan"
              class="p-3"
          >
            <div
                :class="{ 'cursor-pointer': header.sortable }"
                class="flex items-center justify-center gap-2"
                @click="onHeaderClick(header)"
            >
              <div>
                {{ header.label }}
              </div>
              <div v-if="header.sortable">
                <IconSortDesc
                    v-if="header.sort === TableSortDirection.Desc"
                    class="w-5 h-5 cursor-pointer"
                />
                <IconSortAsc
                    v-else-if="header.sort === TableSortDirection.Asc"
                    class="w-5 h-5 cursor-pointer"
                />
                <IconSortNone v-else/>
              </div>
            </div>
          </th>
        </tr>
        <tr v-if="subHeaders">
          <th
              v-for="(header, index) in subHeaders"
              :key="index"
              :colspan="header.colspan"
              :rowspan="header.rowspan"
              class="p-3"
          >
            {{ header.label }}
          </th>
        </tr>
        </thead>
        <tbody class="bg-white dark:bg-dark-400">
        <slot></slot>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup lang="ts">
import {TableHeader, TableProps, TableSortDirection} from "@/components/Table/types";
import IconSortDesc from "@/assets/icons/IconSortDesc.vue";
import IconSortAsc from "@/assets/icons/IconSortAsc.vue";
import IconSortNone from "@/assets/icons/IconSortNone.vue";

const props = defineProps<TableProps>()
const emit = defineEmits<{
  sort: [{ key: string; sort: TableSortDirection }]
}>()

function onHeaderClick(header: TableHeader) {
  if (header.sortable) {
    if (header.sort === TableSortDirection.Desc) {
      header.sort = TableSortDirection.Asc
    } else if (header.sort === TableSortDirection.Asc) {
      header.sort = TableSortDirection.None;
    } else {
      header.sort = TableSortDirection.Desc
    }


    emit('sort', { key: header.key, sort: header.sort })
  }
}
</script>

<style scoped>

</style>