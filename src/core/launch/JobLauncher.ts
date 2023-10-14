import { Job } from "../Job";
import { JobExecution } from "../JobExecution";
import { JobParameters } from "../JobParameters";

export interface JobLauncher {
  run(job: Job, jobParameters: JobParameters): Promise<JobExecution>;
}
