import { RepeatStatus } from "../../repeat/RepeatStatus";
import { StepContribution } from "../StepContribution";
import { ChunkContext } from "../scope/context/ChunkContext";

export interface Tasklet {
  execute(
    contribution: StepContribution,
    chunkContext: ChunkContext,
  ): Promise<RepeatStatus>;
}
