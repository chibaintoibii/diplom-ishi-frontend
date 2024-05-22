export interface IGroupItem {
  _id: string;
  createdAt: string;
  name: string;
  countOfStudents: number;
  teacher: {
    fullName: string
  };
}

export interface IGroupDetails extends IGroupItem {
  students: GroupStudentItem[]
}

export interface GroupStudentItem {
  _id: string;
  fullName: string;
  submittedReports: number;
  estimatedReports: number;
  backlogReports: number;
}