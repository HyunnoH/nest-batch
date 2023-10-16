import { Step } from "../Step";
import { StepExecution } from "../StepExecution";

export abstract class AbstractStep implements Step {
  isAllowStartingIfComplete: boolean;
  name: string;
  startLimit: number;

  constructor();
  constructor(name: string);
  constructor(name?: string) {
    this.name = name || "";
  }

  async execute(stepExecution: StepExecution): Promise<void> {}
}
