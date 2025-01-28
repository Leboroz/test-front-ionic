import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subscribable, Subscription, map } from "rxjs";
import { IStudentResponse, ITutorResponse } from "../types/types";
import { Student } from "../entity/Student";
import { Tutor } from "../entity/Tutor";

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private _http: HttpClient;
  private URL = 'https://test.worldsacross.com/api/'
  private USER_END_POINT = 'users'
  private TUTOR_END_POINT = 'tutors'
  private CLASSES_END_POINT = 'classes'

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

  // public getClasses(): Observable<Classes[]> {
  //   return this._http.get<ITutorResponse[]>(this.URL + this.TUTOR_END_POINT)
  //     .pipe(map(students => students.map(s => new Tutor(
  //       s.id,
  //       new Date(s.created_at),
  //       new Date(s.updated_at),
  //       s.first_name,
  //       s.last_name,
  //       new Date(s.date_of_birth),
  //       s.email,
  //       s.nationality,
  //       s.speciality,
  //     ))));
  // }
}
