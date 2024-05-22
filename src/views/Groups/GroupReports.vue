<template>
  <div class="flex w-full">
    <div v-if="isLoading"></div>
    <div class="w-full flex" v-else-if="data">
      <div class="w-full max-h-screen min-h-[600px] flex justify-between">
        <div class="h-full">
          <div class="w-[270px] bg-gray-300 dark:bg-dark-400 p-2 rounded-lg">
            <div class="bg-yellow-300 px-3 py-2 rounded flex items-center justify-between mb-2">
              <div class="text-white font-bold tracking-widest">New</div>
              <div class="rounded-full w-6 h-6 flex justify-center items-center bg-white text-sm">
                {{ data?.newReports.length }}
              </div>
            </div>
            <div class="mb-3 max-h-[500px] overflow-y-auto px-1" v-if="data?.newReports.length > 0">
              <ReportItem
                  v-for="item in data.newReports"
                  :item="item"
                  class="mt-3"
                  @click="handleClick(item._id)"
              />
            </div>
            <div v-else class="text-center dark:text-white">
              {{t('reports.no')}}
            </div>
            <div class="flex justify-between items-center flex-col">
              <BaseButton variant="light" class="w-full" @click="showCreateReportModal"><i class="fa fa-plus"></i> {{t('reports.create')}}
              </BaseButton>
            </div>
          </div>
        </div>
        <div class="h-full">
          <div class="w-[270px] bg-gray-300 dark:bg-dark-400 p-2 rounded-lg">
            <div class="bg-sky-300 px-3 py-2 rounded flex items-center justify-between mb-2" >
              <div class="text-white font-bold tracking-widest">Backlog</div>
              <div class="rounded-full w-6 h-6 flex justify-center items-center bg-white text-sm">
                {{ data?.backlogReports.length }}
              </div>
            </div>
            <div class="mb-3 max-h-[500px] overflow-y-auto mx-1" v-if="data?.backlogReports.length > 0">
              <ReportItem
                  v-for="item in data.backlogReports"
                  :item="item"
                  class="mt-3"
                  @click="handleClick(item._id)"
              />
            </div>
            <div v-else class="text-center dark:text-white">
              {{t('reports.no')}}
            </div>
          </div>
        </div>
        <div class="h-full">
          <div class="w-[270px] bg-gray-300 p-2 dark:bg-dark-400 rounded-lg">
            <div class="bg-green-500 px-3 py-2 rounded flex items-center justify-between ">
              <div class="text-white font-bold tracking-widest">Done</div>
              <div class="rounded-full w-6 h-6 flex justify-center items-center bg-white text-sm">
                {{ data.doneReports.length }}
              </div>
            </div>
            <div class="mb-3 max-h-[500px] overflow-y-auto mx-1" v-if="data?.doneReports.length > 0">
              <ReportItem
                  v-for="item in data.backlogReports"
                  :item="item"
                  class="mt-3"

                  @click="handleClick(item._id)"
              />
            </div>
            <div v-else class="mt-2 text-center dark:text-white">
              {{t('reports.no')}}
            </div>
          </div>
        </div>
        <div class="h-full">
          <div class="w-[270px] bg-gray-300 p-2 dark:bg-dark-400 rounded-lg">
            <div class="bg-blue-600 px-3 py-2 rounded flex items-center justify-between ">
              <div class="text-white font-bold tracking-widest">Estimated</div>
              <div class="rounded-full w-6 h-6 flex justify-center items-center bg-white text-sm">
                {{ data.estimatedReports.length }}
              </div>
            </div>
            <div class="mb-3 max-h-[500px] overflow-y-auto mx-1" v-if="data?.estimatedReports.length > 0">
              <ReportItem
                  v-for="item in data.backlogReports"
                  :item="item"
                  class="mt-3"
                  @click="handleClick(item._id)"
              />
            </div>
            <div v-else class="mt-2 text-center dark:text-white">
              {{t('reports.no')}}
            </div>
          </div>
        </div>
        <div class="h-full">
          <div class="w-[270px] bg-gray-300 p-2 dark:bg-dark-400 rounded-lg">
            <div class="bg-red-500 px-3 py-2 rounded flex items-center justify-between">
              <div class="text-white font-bold tracking-widest">Rejected</div>
              <div class="rounded-full w-6 h-6 flex justify-center items-center bg-white text-sm">
                {{ data.rejectedReports.length }}
              </div>
            </div>
            <div class="mb-3 max-h-[500px] overflow-y-auto mx-1" v-if="data?.rejectedReports.length > 0">
              <ReportItem
                  v-for="item in data.backlogReports"
                  :item="item"
                  class="mt-3"
                  @click="handleClick(item._id)"
              />
            </div>
            <div v-else class="mt-2 text-center dark:text-white">
              {{t('reports.no')}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ReportItem from "@/components/Reports/ReportItem.vue";
import BaseButton from "@/components/Button/BaseButton.vue";
import {computed, reactive, Ref} from "vue";
import {IReportItem, ReportStatus} from "@/components/Reports/types";
import {useCreateReport} from "@/views/Groups/Modals/useCreateReport";
import {getGroupReports, IGroupReportsResponse} from "@/services/http/api/reports";
import {useI18n} from "vue-i18n";

const props = defineProps<{
  groupId: string
}>();

const {t} = useI18n();

function handleClick(id: string) {
  // todo open modal and get more information of clicked report
  console.log(id);
}


function showCreateReportModal() {
  useCreateReport().open();
}


const {isLoading, data} = getGroupReports(props.groupId) as {
  isLoading: Ref<boolean>,
  data: Ref<IGroupReportsResponse>
};
</script>

<style scoped>

</style>