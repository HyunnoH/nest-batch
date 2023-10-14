import { Entity } from "./Entity";

export class JobInstance extends Entity {
  private _jobName: string;

  get jobName() {
    return this._jobName;
  }

  get instanceId() {
    return this.id;
  }

  constructor(id: number, jobName: string) {
    super(id);
    this._jobName = jobName;
  }
}
