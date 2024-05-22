<script setup lang="ts">
import {computed, Ref, ref, watch} from 'vue';
import BaseButton from "@/components/Button/BaseButton.vue";
import SimpleSelect from "@/components/Select/SimpleSelect.vue";
import {POSITION, useToast} from "vue-toastification";
import GroupItem from "@/views/Groups/GroupItem.vue";
import {IGroupItem} from "@/views/Groups/types";
import {useRegisterStudent} from "@/views/Students/Modal/useRegisterStudent";
import {getGroups, GroupStatus} from "@/services/http/api/groups";
import Loader from "@/components/Loader/Loader.vue";
import {useRoute, useRouter} from "vue-router";
import {useI18n} from "vue-i18n";
import {useCreateGroup} from "@/views/Groups/Modals/useCreateGroup";

const {t} = useI18n();
const router = useRouter();
const route = useRoute();
const toast = useToast();

const options = computed(() => {
  return Object.values(GroupStatus).map(item => {
    return {
      value: item, label: item, selected: false
    }
  })
})

const currentStatus = ref<string>(route.query.status?.toString() ?? GroupStatus.ACTIVE);

const status = computed<{ status: string }>(() => {
  return {status: currentStatus.value}
})


const {data: groupsList, isLoading, refetch} = getGroups(status) as {
  data: Ref<IGroupItem[]>,
  isLoading: Ref<boolean>,
  refetch: any
}


watch(currentStatus, (newStatus) => {
  router.replace({
    query: {
      status: newStatus
    }
  })
  refetch();
})


function onclickButton() {
  toast.warning("Hi from LogRocket", {
    position: POSITION.TOP_RIGHT,
    timeout: 3000,
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

function showCreateGroupModal() {
  useCreateGroup().open();
}
</script>
<template>
  <div class="container-fluid p-4 mx-auto">
    <div class="flex justify-between mb-4">
      <div class="flex gap-6 items-center">
        <SimpleSelect :options="options" v-model="currentStatus"/>
      </div>
      <BaseButton @click="showCreateGroupModal" variant="success" class="self-end"><i class="fa fa-plus"></i> Create
      </BaseButton>
    </div>
    <Loader v-if="isLoading"/>
    <div v-else-if="groupsList.length > 0"
         class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 gap-5 ">
      <GroupItem v-for="item in groupsList" :item="item"/>
    </div>
    <div v-else class="text-center text-xl font-bold dark:text-white">
      {{ t('no_data') }}
    </div>

  </div>

</template>
<style scoped>

</style>