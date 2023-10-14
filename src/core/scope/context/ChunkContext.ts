import { StepContext } from "./StepContext";

export class ChunkContext {
  readonly stepContext: StepContext;
  private _isComplete: boolean;

  constructor(stepContext: StepContext) {
    this.stepContext = stepContext;
    this._isComplete = false;
  }

  get isComplete() {
    return this._isComplete;
  }

  setComplete() {
    this._isComplete = true;
  }
}
