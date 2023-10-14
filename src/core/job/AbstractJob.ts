import { Step } from "../core/Step";
import { Job } from "../core/Job";
import { JobExecution } from "../core/JobExecution";

export abstract class AbstractJob implements Job {
  isRestartable: boolean;
  name: string;

  constructor(name?: string) {
    this.name = name || "";
  }

  abstract getStep(stepName: string): Step;

  async execute(jobExecution: JobExecution): Promise<void> {}
}
