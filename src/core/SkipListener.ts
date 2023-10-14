export interface SkipListener<T, S> {
  onSkipInProgress(item: T, e: Error): void;
  onSkipInRead(e: Error): void;
  onSkipInWrite(item: S, e: Error): void;
}
