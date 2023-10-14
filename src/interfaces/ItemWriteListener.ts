import { Chunk } from "../item/Chunk";
import { StepListener } from "./StepListener";

export interface ItemWriteListener<S> extends StepListener {
  afterWrite(items: Chunk<S>): void;
  beforeWrite(items: Chunk<S>): void;
  onWriteError(exception: Error, items: Chunk<S>): void;
}
