import { time, IEntity } from "../types/types";

export class Entity implements IEntity {
  private _id: string;
  private _createdAt: time;
  private _updatedAt: time;

  constructor(id: string, createdAt: time, updatedAt: time) {
    this._id = id;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
  }

  public get id(): string {
    return this._id;
  }

  public get createdAt(): time {
    return this._createdAt;
  }

  public get updatedAt(): time {
    return this._updatedAt;
  }

  public set id(id: string) {
    this._id = id;
  }

  public set createdAt(createdAt: time) {
    this._createdAt = createdAt;
  }

  public set updatedAt(updatedAt: time) {
    this._updatedAt = updatedAt;
  }
}
