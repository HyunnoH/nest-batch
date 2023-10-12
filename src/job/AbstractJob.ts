import { Step } from "../interfaces/Step";
import { Job } from "../interfaces/Job";
import { JobExecution } from "../interfaces/JobExecution";

export abstract class AbstractJob implements Job {
  isRestartable: boolean;
  name: string;

  constructor(name?: string) {
    this.name = name || "";
  }

  abstract getStep(stepName: string): Step;

  async execute(jobExecution: JobExecution): Promise<void> {}
}
