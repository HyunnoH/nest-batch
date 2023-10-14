import { Enum, EnumType } from "ts-jenum";

@Enum("enumCount")
export class BatchStatus extends EnumType<BatchStatus>() {
  static readonly COMPLETED = new BatchStatus(1, "COMPLETED");
  static readonly STARTING = new BatchStatus(2, "STARTING");
  static readonly STARTED = new BatchStatus(3, "STARTED");
  static readonly STOPPING = new BatchStatus(4, "STOPPING");
  static readonly STOPPED = new BatchStatus(5, "STOPPED");
  static readonly FAILED = new BatchStatus(6, "FAILED");
  static readonly ABANDONED = new BatchStatus(7, "ABANDONED");
  static readonly UNKNOWN = new BatchStatus(8, "UNKNOWN");

  static max(status1: BatchStatus, status2: BatchStatus) {
    return status1.isGreaterThan(status2) ? status1 : status2;
  }

  isRunning() {
    return (
      this === BatchStatus.STARTING ||
      this === BatchStatus.STARTED ||
      this === BatchStatus.STOPPING
    );
  }

  isUnsuccessful() {
    return (
      this === BatchStatus.FAILED || this.isGreaterThan(BatchStatus.FAILED)
    );
  }

  upgradeTo(other: BatchStatus) {
    if (
      this.isGreaterThan(BatchStatus.STARTED) ||
      other.isGreaterThan(BatchStatus.STARTED)
    ) {
      return BatchStatus.max(this, other);
    }
    // Both less than or equal to STARTED
    if (this == BatchStatus.COMPLETED || other == BatchStatus.COMPLETED) {
      return BatchStatus.COMPLETED;
    }
    return BatchStatus.max(this, other);
  }

  isGreaterThan(other: BatchStatus) {
    return this.enumCount - other.enumCount > 0;
  }

  isLesserThan(other: BatchStatus) {
    return this.enumCount - other.enumCount < 0;
  }

  isLesserThanOrEqualTo(other: BatchStatus) {
    return this.enumCount - other.enumCount <= 0;
  }

  static values() {
    return [
      BatchStatus.COMPLETED,
      BatchStatus.STARTING,
      BatchStatus.STARTED,
      BatchStatus.STOPPING,
      BatchStatus.STOPPED,
      BatchStatus.FAILED,
      BatchStatus.ABANDONED,
      BatchStatus.UNKNOWN,
    ];
  }

  match(value: string) {
    for (const status of BatchStatus.values()) {
      if (value.startsWith(status.name)) {
        return status;
      }
    }
    return BatchStatus.COMPLETED;
  }

  private constructor(
    readonly enumCount: number,
    readonly name: string,
  ) {
    super();
  }
}
