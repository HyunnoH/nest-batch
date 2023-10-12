import { StepExecution } from "./StepExecution";

export interface Step {
  readonly name: string;
  readonly startLimit: number;
  readonly isAllowStartingIfComplete: boolean;
  execute(stepExecution: StepExecution): Promise<void>;
}
