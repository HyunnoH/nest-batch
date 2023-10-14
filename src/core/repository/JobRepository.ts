import { JobExecution } from "../JobExecution";
import { JobInstance } from "../JobInstance";
import { JobParameters } from "../JobParameters";
import { StepExecution } from "../StepExecution";

export interface JobRepository {
  add(stepExecution: StepExecution): Promise<void>;
  addAll(stepExecutions: StepExecution[]): Promise<void>;
  createJobExecution(
    jobName: string,
    jobParameters: JobParameters,
  ): Promise<JobExecution>;
  createJobInstance(
    jobName: string,
    jobParameters: JobParameters,
  ): Promise<JobInstance>;
  deleteJobExecution(jobExecution: JobExecution): Promise<void>;
  deleteJobInstance(jobInstance: JobInstance): Promise<void>;
  deleteStepExecution(stepExecution: StepExecution): Promise<void>;
  findJobExecutions(jobInstance: JobInstance): Promise<JobExecution[]>;
  findJobInstancesByName(
    name: string,
    start: number,
    count: number,
  ): Promise<JobInstance[]>;
  getJobInstance(
    jobName: string,
    jobParameters: JobParameters,
  ): Promise<JobInstance>;
  getJobNames(): Promise<string[]>;
  getLastJobExecution(
    jobName: string,
    jobParameters: JobParameters,
  ): Promise<JobExecution>;
  getLastStepExecution(
    jobInstance: JobInstance,
    stepName: string,
  ): Promise<StepExecution>;
  getStepExecutionCount(jobInstance: JobInstance, stepName: string): number;
  isJobInstanceExists(jobName: string, jobParameters: JobParameters): boolean;
  update(jobExecution: JobExecution): Promise<void>;
  update(stepExecution: StepExecution): Promise<void>;
  updateExecutionContext(jobExecution: JobExecution): Promise<void>;
  updateExecutionContext(stepExecution: StepExecution): Promise<void>;
}
