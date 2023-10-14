import { Job } from "../core/Job";
import { JobExecution } from "../core/JobExecution";
import { JobParameters } from "../core/JobParameters";

export interface JobLauncher {
  run(job: Job, jobParameters: JobParameters): Promise<JobExecution>;
}
