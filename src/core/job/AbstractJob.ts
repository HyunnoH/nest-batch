import { Step } from "../Step";
import { Job } from "../Job";
import { JobExecution } from "../JobExecution";
import { JobRepository } from "../repository/JobRepository";
import { JobExecutionListener } from "../JobExecutionListener";
import { BatchStatus } from "../BatchStatus";

export abstract class AbstractJob implements Job {
  isRestartable: boolean = true;
  name: string;
  jobRepository: JobRepository;

  protected jobExecutionListeners: JobExecutionListener[];

  constructor(name?: string) {
    this.name = name || "";
  }

  registerJobExecutionListener(listener: JobExecutionListener) {
    this.jobExecutionListeners.push(listener);
  }

  setJobExecutionListeners(listeners: JobExecutionListener[]) {
    this.jobExecutionListeners = listeners;
  }

  abstract getStep(stepName: string): Step | undefined;

  abstract getStepNames(): string[];

  protected abstract doExecute(jobExecution: JobExecution): Promise<void>;

  async execute(jobExecution: JobExecution): Promise<void> {
    this.jobExecutionListeners.forEach((listener) => {
      listener.beforeJob(jobExecution);
    });
    await this.doExecute(jobExecution);
    jobExecution.upgradeStatus(BatchStatus.COMPLETED);
    await this.jobRepository.update(jobExecution);
    this.jobExecutionListeners.forEach((listener) => {
      listener.afterJob(jobExecution);
    });
  }
}
