import { time } from "../types/types";
import { Person } from "./Person";

export class Student extends Person {
  private _address: string;

  constructor(id: string, createdAt: time, updatedAt: time, firstName: string, lastName: string, dateOfBirth: Date, address: string) {
    super(id, createdAt, updatedAt, firstName, lastName, dateOfBirth)
    this._address = address;
  }

  public get address(): string {
    return this._address;
  }

  public set address(address: string) {
    this._address = address;
  }
}
