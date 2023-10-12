import { JobExecution } from "./JobExecution";

export interface Job {
  readonly name: string;
  readonly isRestartable: boolean;
  execute(jobExecution: JobExecution): Promise<void>;
}
