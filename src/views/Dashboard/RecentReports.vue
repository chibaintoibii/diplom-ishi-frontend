<template>
  <div class="bg-white dark:bg-dark-500 text-sky-900 tracking-wider dark:text-white p-[20px] rounded-[15px] ">
    <h3 class="text-center text-lg ">Oxirgi jo'natilgan hisobotlar</h3>
    <div class="relative overflow-y-auto h-[370px] ">
      <table class="mt-5 w-full table-auto text-sm">
        <thead class="sticky z-10 dark:text-white">
        <tr class="">
          <th class="text-start">№</th>
          <th class="text-start">
            Yuboruvchi
          </th>
          <th class="text-start">
            Yuborilgan vaqt
          </th>
          <th class="text-center">
            Holati
          </th>
        </tr>
        </thead>
        <tbody class="">
        <tr v-for="i in 15" class="border-t">
          <td>{{ i }}</td>
          <td class="">Xamidjonov Islom</td>
          <td>21.02.2024 15:23</td>
          <td class="text-center"><span class="text-blue-800 font-bold p-1.5 rounded">yangi</span></td>
        </tr>

        </tbody>
      </table>
    </div>


  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>