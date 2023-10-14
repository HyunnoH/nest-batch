import { Job } from "../interfaces/Job";
import { JobExecution } from "../interfaces/JobExecution";
import { JobParameters } from "../interfaces/JobParameters";

export interface JobLauncher {
  run(job: Job, jobParameters: JobParameters): JobExecution;
}
