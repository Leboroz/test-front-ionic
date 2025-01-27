import { time } from "../types/types";
import { Person } from "./Person";

export class Tutor extends Person {
  private _email: string;
  private _nationality: string;
  private _speciality: string;

  constructor(id: string, createdAt: time, updatedAt: time, firstName: string, lastName: string, dateOfBirth: Date, email: string, nationality: string, speciality: string) {
    super(id, createdAt, updatedAt, firstName, lastName, dateOfBirth);
    this._email = email;
    this._nationality = nationality;
    this._speciality = speciality;
  }

  public get email(): string {
    return this._email;
  }

  public set email(email: string) {
    this._email = email;
  }

  public get nationality(): string {
    return this._nationality;
  }

  public set nationality(nationality: string) {
    this._nationality = nationality;
  }

  public get speciality(): string {
    return this._speciality;
  }

  public set speciality(speciality: string) {
    this._speciality = speciality;
  }
}
