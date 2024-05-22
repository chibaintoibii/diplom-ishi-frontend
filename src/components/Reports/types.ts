export interface IReportItem {
  _id: string;
  author?: string;
  title?: string;
  content?: string;
  deadline?: Date;
  status: ReportStatus;
}

export enum ReportStatus {
  BACKLOG = 'backlog',
  NEW = 'new',
  DONE = 'done',
  ESTIMATED = 'estimated',
  REJECTED = 'rejected'
}