export interface IGroupItem {
  _id: string;
  createdAt: Date;
  name: string;
  countOfStudents: number;
  attachedTeacher: string;
}

export interface IGroupDetails extends IGroupItem{
  students: GroupStudentItem[]
}

export interface GroupStudentItem {
  _id: string;
  fullName: string;
  submittedReports: number;
  estimatedReports: number;
  backlogReports: number;
}