import { SkipWrapper } from "./SkipWrapper";

export class Chunk<W> {
  private _items: W[];

  constructor(items: W[]);
  constructor(items: W[], skips: SkipWrapper<W>);
  constructor(items: W[], skips?: SkipWrapper<W>) {
    this._items = items;
  }

  get items() {
    return this._items;
  }

  add(item: W) {
    this._items.push(item);
  }

  addAll(items: W[]) {
    this._items.push(...items);
  }
}
