import { IDataReceiver } from "./IDataReceiver";
import { IDataShower } from "./IDataShower";

export abstract class ObservableDataReceiver<T> implements IDataReceiver<T> {
  protected observers: IDataShower<T>[] = [];
  protected _data: T | undefined; // Using T | undefined to indicate initial state

  constructor() {
    this._data = this.initializeData(); // Initialize data in constructor
  }

  // Abstract method to be implemented by concrete receivers to get initial data
  protected abstract initializeData(): T;

  public getData(): T {
    if (this._data === undefined) {
      throw new Error("Data not initialized in ObservableDataReceiver.");
    }
    return this._data;
  }

  // This method will be called by concrete receivers when their data changes
  protected setData(newData: T): void {
    this._data = newData;
    this.notifyObservers();
  }

  public subscribe(observer: IDataShower<T>): void {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
      // Immediately update new observer with current data
      observer.update(this.getData());
    }
  }

  public unsubscribe(observer: IDataShower<T>): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  public notifyObservers(): void {
    if (this._data === undefined) {
      // No data to notify, perhaps log a warning
      console.warn("Attempted to notify observers with uninitialized data.");
      return;
    }
    this.observers.forEach((observer) => observer.update(this._data as T));
  }
}
