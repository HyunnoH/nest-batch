import { BatchStatus } from "./BatchStatus";
import { Entity } from "./Entity";
import { JobInstance } from "./JobInstance";
import { JobParameters } from "./JobParameters";
import { StepExecution } from "./StepExecution";

export class JobExecution extends Entity {
  private parameters: JobParameters;
  private _stepExecutions: StepExecution[];
  status: BatchStatus;
  job: JobInstance;

  constructor(id: number);
  constructor(id: number, jobParameters: JobParameters);
  constructor(original: JobExecution);
  constructor(job: JobInstance, id: number, jobParameters: JobParameters);
  constructor(job: JobInstance, jobParameters: JobParameters);
  constructor(
    idOrOriginalOrJob: number | JobExecution | JobInstance,
    idOrJobParameters?: number | JobParameters,
    jobParameters?: JobParameters,
  ) {
    if (idOrOriginalOrJob instanceof JobExecution) {
      super();
      this.parameters = idOrOriginalOrJob.parameters;
      this.version = idOrOriginalOrJob.version;
    } else if (idOrOriginalOrJob instanceof JobInstance) {
      super(idOrOriginalOrJob.id);
      this.parameters =
        idOrJobParameters instanceof JobParameters
          ? idOrJobParameters
          : jobParameters!;
      if (typeof idOrJobParameters === "number") {
        this.id = idOrJobParameters;
      }
      this.job = idOrOriginalOrJob;
    } else {
      super(idOrOriginalOrJob);
      this.parameters =
        idOrJobParameters instanceof JobParameters
          ? idOrJobParameters
          : new JobParameters();
    }
    this._stepExecutions = [];
    this.status = BatchStatus.UNKNOWN;
  }

  get stepExecutions() {
    return this._stepExecutions;
  }

  get isRunning() {
    return this.status.isRunning;
  }

  get isStopping() {
    return this.status === BatchStatus.STOPPING;
  }

  addStepExecutions(stepExecutions: StepExecution[]) {
    this._stepExecutions.push(...stepExecutions);
  }

  createStepExecution(stepName: string) {
    const stepExecution = new StepExecution(stepName, this);
    return stepExecution;
  }

  upgradeStatus(status: BatchStatus) {
    this.status = this.status.upgradeTo(status);
  }
}
