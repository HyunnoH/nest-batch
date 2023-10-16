import { ExecutionContext } from "../../item/ExecutionContext";
import { Step } from "../Step";
import { StepExecution } from "../StepExecution";
import { StepExecutionListener } from "../StepExecutionListener";
import { JobRepository } from "../repository/JobRepository";

export abstract class AbstractStep implements Step {
  isAllowStartingIfComplete: boolean;
  jobRepository: JobRepository;
  name: string;
  startLimit: number;

  private listeners: StepExecutionListener[] = [];

  constructor();
  constructor(name: string);
  constructor(name?: string) {
    this.name = name || "";
  }

  protected abstract doExecute(stepExecution: StepExecution): Promise<void>;

  async execute(stepExecution: StepExecution): Promise<void> {
    this.listeners.forEach((listener) => {
      listener.beforeStep(stepExecution);
    });
    await this.doExecute(stepExecution);
    this.listeners.forEach((listener) => {
      listener.afterStep(stepExecution);
    });
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected open(_ctx: ExecutionContext) {
    // Does nothing by default.
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected close(_ctx: ExecutionContext) {
    // Does nothing by default.
  }

  registerStepExecutionListener(listener: StepExecutionListener) {
    this.listeners.push(listener);
  }

  setStepExecutionListeners(listeners: StepExecutionListener[]) {
    this.listeners = listeners;
  }
}
