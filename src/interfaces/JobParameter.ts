export class JobParameter<T> {
  readonly value: T;
  readonly type: unknown;
  readonly isIdentifying: boolean;

  constructor(value: T, type: unknown);
  constructor(value: T, type: unknown, identifying: boolean);
  constructor(value: T, type: unknown, identifying?: boolean) {
    this.value = value;
    this.type = type;
    this.isIdentifying = identifying ?? true;
  }
}
