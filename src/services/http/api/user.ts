import {useQuery} from "@tanstack/vue-query";
import http from "@/services/http";


export interface IGetMeResponse {
  _id: string;
  username: string;
  role: IUserRole;
  fullName: string;
}


export enum IUserRole {
  Teacher = 'teacher',
  Student = 'student',
  Admin = 'admin'
}


export function getMe() {
  return useQuery({
    queryKey: ['me'],
    retry: 0,
    refetchOnWindowFocus: false,
    queryFn: async () => {
      return http.get<IGetMeResponse>('api/users/me').then(res => res.data);
    }
  })
}