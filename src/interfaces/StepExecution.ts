import { BatchStatus } from "./BatchStatus";
import { Entity } from "./Entity";
import { JobExecution } from "./JobExecution";

export class StepExecution extends Entity {
  readonly stepName: string;

  private jobExecution: JobExecution;
  private _skipCount: number;

  status: BatchStatus;
  startTime: Date;
  endTime: Date;
  readCount: number;
  readSkipCount: number;
  rollbackCount: number;
  writeCount: number;
  writeSkipCount: number;

  constructor(stepName: string, jobExecution: JobExecution);
  constructor(stepName: string, jobExecution: JobExecution, id: number);
  constructor(stepName: string, jobExecution: JobExecution, id?: number) {
    super(id);
    this.stepName = stepName;
    this.jobExecution = jobExecution;
    this.status = BatchStatus.UNKNOWN;
  }

  get skipCount() {
    return this._skipCount;
  }

  upgradeStatus(status: BatchStatus) {
    this.status = this.status.upgradeTo(status);
  }
}
