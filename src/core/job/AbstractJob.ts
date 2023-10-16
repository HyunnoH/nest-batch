import { Step } from "../Step";
import { Job } from "../Job";
import { JobExecution } from "../JobExecution";

export abstract class AbstractJob implements Job {
  isRestartable: boolean;
  name: string;

  constructor(name?: string) {
    this.name = name || "";
  }

  abstract getStep(stepName: string): Step | undefined;

  async execute(jobExecution: JobExecution): Promise<void> {}
}
