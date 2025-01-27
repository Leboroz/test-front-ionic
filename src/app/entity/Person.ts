import { time } from "../types/types";
import { Entity } from "./Entity";

export class Person extends Entity {
  private _firstName: string;
  private _lastName: string;
  private _dateOfBirth: Date;

  constructor(id: string, createdAt: time, updatedAt: time, firstName: string, lastName: string, dateOfBirth: Date) {
    super(id, createdAt, updatedAt);
    this._firstName = firstName;
    this._lastName = lastName;
    this._dateOfBirth = dateOfBirth;
  }

  public get firstName(): string {
    return this._firstName;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public get dateOfBirth(): Date {
    return this._dateOfBirth;
  }

  public set firstName(firstName: string) {
    this._firstName = firstName;
  }

  public set lastName(lastName: string) {
    this._lastName = lastName;
  }

  public set dateOfBirth(dateOfBirth: Date) {
    this._dateOfBirth = dateOfBirth;
  }
}
