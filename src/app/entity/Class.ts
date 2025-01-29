import { Entity } from "./Entity";
import { Student } from "./Student";
import { Tutor } from "./Tutor";

export class Class extends Entity {
  private _date: Date;
  private _startTime: Date;
  private _endTime: Date;
  private _tutor: Tutor;
  private _student: Student;

  constructor(id: string, createdAt: Date, updatedAt: Date, date: Date, startTime: Date, endTime: Date, tutor: Tutor, student: Student) {
    super(id, createdAt, updatedAt);
    this._date = date;
    this._startTime = startTime;
    this._endTime = endTime;
    this._tutor = tutor;
    this._student = student;
  }

  public get date(): Date {
    return this._date;
  }

  public set date(date: Date) {
    this._date = date;
  }

  public get startTime(): Date {
    return this._startTime;
  }

  public set startTime(startTime: Date) {
    this._startTime = startTime;
  }

  public get endTime(): Date {
    return this._endTime;
  }

  public set endTime(endTime: Date) {
    this._endTime = endTime;
  }

  public get student(): Student {
    return this._student;
  }

  public set student(student: Student) {
    this._student = student;
  }

  public get tutor(): Tutor {
    return this._tutor;
  }

  public set tutor(tutor: Tutor) {
    this._tutor = tutor;
  }
}
