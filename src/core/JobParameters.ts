import { JobParameter } from "./JobParameter";

export class JobParameters {
  private parameters: Record<string, JobParameter<unknown>>;

  constructor();
  constructor(parameters: Record<string, JobParameter<unknown>>);
  constructor(parameters?: Record<string, JobParameter<unknown>>) {
    this.parameters = parameters || {};
  }

  get isEmpty() {
    return Object.keys(this.parameters).length === 0;
  }

  getParameters() {
    return this.parameters;
  }

  getParameter(key: string) {
    return this.parameters[key];
  }
}
