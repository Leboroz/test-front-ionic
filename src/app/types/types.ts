export type time = Date | null

export interface IEntity {
  id: string;
  createdAt: time;
  updatedAt: time;
}

export interface ITutorResponse {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  date_of_birth: string;
  nationality: string;
  speciality: string;
  created_at: string;
  updated_at: string;
}

export interface IStudentResponse {
  id: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  address: string;
  created_at: string;
  updated_at: string;
}

export interface IClassesResponse {
  id: string;
  tutor_id: string;
  student_id: string;
  date: string;
  start_time: string;
  end_time: string;
  created_at: string;
  updated_at: string;
  tutor: ITutorResponse;
  student: IStudentResponse;
}
