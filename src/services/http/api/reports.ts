import {useMutation, useQuery} from "@tanstack/vue-query";
import http from "@/services/http";

export interface IReportForm {
  title: string;
  content?: string;
  groupId: string;
  deadline: string
}
export interface INewReport {
  _id: string;
  title: string;
  deadline: string;
  author: string;
}

export interface IBacklogReport extends INewReport{}
export interface IDoneReport extends INewReport{}

export interface IEstimatedReport extends INewReport {
  assessment: number
}

export interface IRejectedReport extends INewReport {
  reasonReject: string;
}

export interface IGroupReportsResponse {
  backlogReports: IBacklogReport[]
  newReports: INewReport[]
  doneReports: IDoneReport[]
  estimatedReports: IEstimatedReport[]
  rejectedReports: IRejectedReport[]
}

export function createReports() {
  return useMutation({
    mutationKey: ['reports'],
    mutationFn: async (body: IReportForm) => {
      return http.post('/reports', body).then(res => res.data);
    }
  })
}

export function getGroupReports(groupId: string) {
  return useQuery({
    queryKey: ['reports', groupId],
    queryFn: async () => {
      return http.get<IGroupReportsResponse>('/reports', {
        params: {groupId}
      }).then(res => res.data);
    }
  })
}