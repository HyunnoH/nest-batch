import { ExecutionContext } from "../../item/ExecutionContext";
import { ItemStream } from "../../item/ItemStream";
import { ChunkListener } from "../ChunkListener";
import { StepExecution } from "../StepExecution";
import { AbstractStep } from "./AbstractStep";
import { Tasklet } from "./Tasklet";

export class TaskletStep extends AbstractStep {
  tasklet: Tasklet;

  private listeners: ChunkListener[];
  private streams: ItemStream[];

  protected close(ctx: ExecutionContext) {}

  protected doExecute(stepExecution: StepExecution) {}

  registerChunkListener(listener: ChunkListener) {}

  registerStream(itemStream: ItemStream) {}

  setChunkListeners(listeners: ChunkListener[]) {}

  setStreams(streams: ItemStream[]) {}
}
