import { IDataShower } from "./IDataShower";

export interface IDataReceiver<T> {
  getData(): T;
  subscribe(observer: IDataShower<T>): void;
  unsubscribe(observer: IDataShower<T>): void;
  notifyObservers(): void;
}
