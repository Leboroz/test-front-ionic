import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { IClassesResponse, IStudentResponse, ITutorResponse } from "../types/types";
import { Student } from "../entity/Student";
import { Tutor } from "../entity/Tutor";
import { Class } from "../entity/Class";

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private _http: HttpClient;
  private URL = 'https://test.worldsacross.com/api/'
  private USER_END_POINT = 'users'
  private TUTOR_END_POINT = 'tutors'
  private CLASSES_END_POINT = 'booking'

  constructor(http: HttpClient) { this._http = http; }


  public getUsers(): Observable<Student[]> {
    return this._http.get<IStudentResponse[]>(this.URL + this.USER_END_POINT)
      .pipe(map(students => students.map(u => new Student(
        u.id,
        new Date(u.created_at),
        new Date(u.updated_at),
        u.first_name,
        u.last_name,
        new Date(u.date_of_birth),
        u.address,
      ))));
  }

  public getUser(id: string): Observable<Student> {
    return this.getUsers().pipe(map(users => users.filter(user => user.id === id)[0]));
  }

  public getTutors(): Observable<Tutor[]> {
    return this._http.get<ITutorResponse[]>(this.URL + this.TUTOR_END_POINT)
      .pipe(map(students => students.map(s => new Tutor(
        s.id,
        new Date(s.created_at),
        new Date(s.updated_at),
        s.first_name,
        s.last_name,
        new Date(s.date_of_birth),
        s.email,
        s.nationality,
        s.speciality,
      ))));
  }

  public getClasses(): Observable<Class[]> {
    return this._http.get<[IClassesResponse]>(this.URL + this.CLASSES_END_POINT)
      .pipe(map(classes => classes.map(c => new Class(
        c.id,
        new Date(c.created_at),
        new Date(c.updated_at),
        new Date(c.date),
        new Date(c.start_time),
        new Date(c.end_time),
        new Tutor(
          c.tutor.id,
          new Date(c.tutor.created_at),
          new Date(c.tutor.updated_at),
          c.tutor.first_name,
          c.tutor.last_name,
          new Date(c.tutor.date_of_birth),
          c.tutor.email,
          c.tutor.nationality,
          c.tutor.speciality,
        ),
        new Student(
          c.student.id,
          new Date(c.student.created_at),
          new Date(c.student.updated_at),
          c.student.first_name,
          c.student.last_name,
          new Date(c.student.date_of_birth),
          c.student.address
        )
      ))));
  }
}
