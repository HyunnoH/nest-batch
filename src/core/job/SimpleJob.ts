import { BatchStatus } from "../BatchStatus";
import { JobExecution } from "../JobExecution";
import { Step } from "../Step";
import { AbstractJob } from "./AbstractJob";

export class SimpleJob extends AbstractJob {
  private _steps: Step[];

  constructor();
  constructor(name: string);
  constructor(name?: string) {
    super(name);
  }

  set steps(steps: Step[]) {
    this._steps = steps;
  }

  addStep(step: Step) {
    this._steps.push(step);
  }

  protected async doExecute(execution: JobExecution) {
    for (const step of this._steps) {
      const stepExecution = execution.createStepExecution(step.name);
      await step.execute(stepExecution);
      if (stepExecution.status.isUnsuccessful()) {
        execution.upgradeStatus(BatchStatus.FAILED);
        break;
      }
    }
  }

  getStep(stepName: string) {
    return this._steps.find((step) => step.name === stepName);
  }

  getStepNames() {
    return this._steps.map((step) => step.name);
  }
}
