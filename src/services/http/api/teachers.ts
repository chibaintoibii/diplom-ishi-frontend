import {useMutation, useQuery, useQueryClient} from "@tanstack/vue-query";
import http from "@/services/http";
import {ITeacherResponse} from "@/views/Teachers/types";
import {ComputedRef, toRaw} from "vue";

export interface GetTeachersParams {
  page: number
}

export interface TeacherListItem {
  username: string;
  fullName: string;
  phoneNumber: string;
  countOfGroups: number;
  _id: string;
}

export interface GetTeachersResponse {
  teachers: TeacherListItem[],
  meta: {
    count: number,
    currentPage: number
  }
}

export function createTeacher() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ['create-teacher'],
    mutationFn: async <T>(data: T) => {
      return http.post<ITeacherResponse>('/teachers', data).then(res => res.data)
    },
    onSuccess(context, options) {
      queryClient.refetchQueries({
        queryKey: ['teachers', options]
      })
    }
  })
}

export function getTeachers(data: { page: number }) {
  return useQuery({
    queryKey: ['teachers', data],
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    queryFn: async () => {
      return http.get<GetTeachersResponse>('/teachers', {
        params: {
          page: data.page
        }
      }).then(res => res.data);
    }
  })
}