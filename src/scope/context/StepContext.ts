import { StepExecution } from "../../core/StepExecution";

export type Runnable = () => unknown;

export class StepContext {
  readonly stepExecution: StepExecution;
  private _createTime: Date;
  private callback: Map<string, Runnable> = new Map();

  constructor(stepExecution: StepExecution) {
    this.stepExecution = stepExecution;
  }

  get id() {
    return this.stepExecution.id;
  }

  get jobName() {
    return this.stepExecution.jobExecution.job.jobName;
  }

  get stepName() {
    return this.stepExecution.stepName;
  }

  close() {
    this.callback.forEach((callback) => {
      callback();
    });
  }

  registerDestructionCallback(name: string, callback: Runnable) {
    this.callback.set(name, callback);
  }
}
