import { ExitStatus } from "./ExitStatus";
import { StepExecution } from "./StepExecution";
import { StepListener } from "./StepListener";

export interface StepExecutionListener extends StepListener {
  afterStep(stepExecution: StepExecution): ExitStatus;
  beforeStep(stepExecution: StepExecution): void;
}
