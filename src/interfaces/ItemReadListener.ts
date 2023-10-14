import { StepListener } from "./StepListener";

export interface ItemReadListener<T> extends StepListener {
  afterRead(item: T): void;
  beforeRead(): void;
  onReadError(e: Error): void;
}
