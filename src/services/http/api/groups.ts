import {useQuery} from "@tanstack/vue-query";
import http from "@/services/http";
import {ComputedRef, MaybeRef, Ref, toRaw} from "vue";
import {IGroupItem} from "@/views/Groups/types";

export enum GroupStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive'
}

export interface GroupLabel {
  value: string;
  name: string;
}

export function createGroup() {

}

export function getGroups(status: ComputedRef<{status: string}>) {
  return useQuery({
    queryKey: ['groups'],
    retry: 0,
    queryFn: async () => {
      const filter = toRaw(status.value);
      return http.get('groups', {
        params: filter
      }).then(res => res.data)
    }
  })
}



export function getGroupsLabels() {
  return useQuery({
    queryKey: ['groups_labels'],
    queryFn: async () => {
      return http.get<GroupLabel[]>('/groups/labels').then(res => res.data);
    }
  })
}