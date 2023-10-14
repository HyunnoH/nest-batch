import { Enum, EnumType } from "ts-jenum";

@Enum("continuable")
export class RepeatStatus extends EnumType<RepeatStatus>() {
  static readonly CONTINUABLE = new RepeatStatus(true);
  static readonly FINISHED = new RepeatStatus(false);

  private constructor(private continuable: boolean) {
    super();
  }

  and(value: boolean) {
    return this.continuable && value;
  }

  static continueIf(continuable: boolean) {
    return continuable ? this.CONTINUABLE : this.FINISHED;
  }

  isContinuable() {
    return this.continuable;
  }

  static values() {
    return [this.CONTINUABLE, this.FINISHED];
  }
}
