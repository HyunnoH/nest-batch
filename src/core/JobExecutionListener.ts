import { JobExecution } from "./JobExecution";

export interface JobExecutionListener {
  afterJob(jobExecution: JobExecution): void;
  beforeJob(jobExecution: JobExecution): void;
}
