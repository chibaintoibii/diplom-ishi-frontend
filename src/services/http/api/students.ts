import {useMutation, useQuery, useQueryClient} from "@tanstack/vue-query";
import http from "@/services/http";
import {errorToast, successToast} from "@/components/Toast";


export interface StudentsItem {
  _id: string;
  username: string;
  fullName: string;
  phoneNumber: string;
  gpa: number;
}

export interface IRegisterStudent {
  username: string;
  fullName: string;
  phoneNumber: string;
  password: string;
  groupId: string;
}

export interface RegisterStudentResponse {
  _id: string;
  username: string;
}

export function registerStudent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['register-student'],
    mutationFn: async (body: IRegisterStudent) => {
      return http.post<RegisterStudentResponse>('students', body).then(res => res.data);
    },
    onSuccess(data, options) {
      successToast('student is registered successfully')
      queryClient.refetchQueries({
        queryKey: ['students', options.groupId]
      })
    },
    onError(error) {
      errorToast(`Unknown error ${JSON.stringify(error)}`);
    }
  })
}


export function getStudents(groupId: string) {
  return useQuery({
    queryKey: ['students', groupId],
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    queryFn: async () => {
      return http.get<StudentsItem[]>('students', {
        params: {groupId}
      }).then(res => res.data);
    }
  })
}