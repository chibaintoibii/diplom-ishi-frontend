<template>
  <div class="p-2">
    <CustomTabs :tabs="tabs">
      <!-- Slot content for each tab -->
      <template #default="{ tab }">
        <template v-if="tab.name === 'Reports'">
          <GroupReports :group-id="groupId"/>
        </template>
        <template v-else-if="tab.name === 'Students'">
          <GroupStudents :group-id="groupId"/>
        </template>
        <template v-else-if="tab.name === 'Info'">
          <GroupInfo :group-id="groupId"/>
        </template>
      </template>
    </CustomTabs>
  </div>
</template>

<script lang="ts" setup>
import CustomTabs from '@/components/Tabs/CustomTabs.vue'
import {ref} from "vue";
import GroupReports from "@/views/Groups/GroupReports.vue";
import {useRoute} from "vue-router";
import GroupStudents from "@/views/Groups/GroupStudents.vue";
import GroupInfo from "@/views/Groups/GroupInfo.vue";

const route = useRoute()

const groupId = ref(route.params.id.toString());

const tabs = ref([
  {name: 'Reports'},
  {name: 'Students'},
  {name: 'Info'},
])
</script>
