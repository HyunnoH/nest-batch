import { ExitStatus } from "./ExitStatus";
import { StepExecution } from "./StepExecution";

export interface StepExecutionListener {
  afterStep(stepExecution: StepExecution): ExitStatus;
  beforeStep(stepExecution: StepExecution): void;
}
