import { Chunk } from "../core/item/Chunk";

export interface ItemWriter<T> {
  write(chunk: Chunk<T>): Promise<void>;
}
