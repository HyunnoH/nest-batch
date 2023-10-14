import { StepListener } from "./StepListener";

export interface ItemProcessListener<T, S> extends StepListener {
  afterProcess(item: T, result: S): void;
  beforeProcess(item: T): void;
  onProcessError(item: T, e: Error): void;
}
