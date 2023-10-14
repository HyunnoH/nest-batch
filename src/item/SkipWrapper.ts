export class SkipWrapper<T> {
  readonly item: T;
  private e: Error | undefined;

  constructor(item: T);
  constructor(item: T, e: Error);
  constructor(item: T, e?: Error) {
    this.item = item;
    if (e) {
      this.e = e;
    }
  }

  get exception() {
    return this.e;
  }
}
