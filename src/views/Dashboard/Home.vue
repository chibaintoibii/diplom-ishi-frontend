<template>
  <div class="p-8 mx-auto overflow-y-auto">
    <div class="grid grid-cols-4 gap-6 mb-4">
      <InfoCard v-for="infoCard in infoCards" :key="infoCard.label" :data="infoCard" class="h-[100px]"/>
    </div>
    <div class="grid grid-cols-7 gap-6 h-[400px]">
      <div class="col-span-5 flex rounded-lg items-center justify-center bg-white">
        <ChartReport class="h-full w-full"/>
      </div>
    </div>


  </div>


</template>

<script setup lang="ts">
import InfoCard from "@/components/Cards/InfoCard.vue";
import {InfoCardItem} from "@/components/Cards/types";
import IconStudents from "@/assets/icons/IconStudents.vue";
import IconReport from "@/assets/icons/IconReport.vue";
import IconTeacher from "@/assets/icons/IconTeacher.vue";
import ChartReport from "@/views/Dashboard/ChartReports.vue";
import IconGroup from "@/assets/icons/IconGroup.vue";

const infoCards: InfoCardItem[] = [
  {
    iconName: IconStudents,
    label: 'Total Students',
    number: 2364,
  },
  {
    iconName: IconTeacher,
    label: 'Total teachers',
    number: 2364,
  },
  {
    iconName: IconReport,
    label: 'Total reports',
    number: 2364,
  }

  ,
  {
    iconName: IconGroup,
    label: 'Total groups',
    number: 2364,
  }
]
</script>

<style scoped>

</style>