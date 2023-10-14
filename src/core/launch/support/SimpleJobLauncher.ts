import { Job } from "../../core/Job";
import { JobExecution } from "../../core/JobExecution";
import { JobParameters } from "../../core/JobParameters";
import { JobRepository } from "../../repository/JobRepository";
import { JobLauncher } from "../JobLauncher";

export class SimpleJobLauncher implements JobLauncher {
  private jobRepository: JobRepository;

  async run(job: Job, jobParameters: JobParameters): Promise<JobExecution> {}

  setJobRepository(jobRepository: JobRepository) {
    this.jobRepository = jobRepository;
  }
}
