export class Entity {
  id: number;
  private _version = 1;

  set version(version: number) {
    this._version = version;
  }
  get version() {
    return this._version;
  }

  constructor(id?: number) {
    this.id = id ?? 0;
  }

  incrementVersion() {
    this._version += 1;
  }
}
