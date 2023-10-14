import { Step } from "../Step";
import { StepExecution } from "../StepExecution";

export abstract class AbstractStep implements Step {
  isAllowStartingIfComplete: boolean;

  private _name: string;
  private _startLimit: number;

  set name(name: string) {
    this._name = name;
  }
  get name() {
    return this._name;
  }

  set startLimit(startLimit: number) {
    this._startLimit = startLimit;
  }
  get startLimit() {
    return this._startLimit;
  }

  constructor();
  constructor(name: string);
  constructor(name?: string) {
    this._name = name || "";
  }

  async execute(stepExecution: StepExecution): Promise<void> {}
}
