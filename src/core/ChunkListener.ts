import { ChunkContext } from "./scope/context/ChunkContext";
import { StepListener } from "./StepListener";

export interface ChunkListener extends StepListener {
  afterChunk(context: ChunkContext): void;
  afterChunkError(context: ChunkContext): void;
  beforeChunk(context: ChunkContext): void;
}
