export interface TeacherListItem {
  username: string;
  fullName: string;
  phoneNumber: string;
  countOfGroups: number;
}


export interface ITeacherForm {
  username: string;
  fullName: string;
  password: string;
  phoneNumber: string;
}

export interface ITeacherResponse {
  _id: string;
  username: string;
}