import { ObservableDataReceiver } from "./ObservableDataReceiver";

export class TemperatureReceiver extends ObservableDataReceiver<number> {
  private _currentTemperature: number;
  private intervalId: number | undefined;

  protected initializeData(): number {
    // Initial random temperature
    this._currentTemperature = this.generateRandomTemperature();
    return this._currentTemperature;
  }

  constructor() {
    super(); // Call the base class constructor first
    this.startSimulatingTemperatureChanges();
  }

  private generateRandomTemperature(): number {
    return Math.floor(Math.random() * (35 - 15 + 1)) + 15;
  }

  private startSimulatingTemperatureChanges(): void {
    this.intervalId = setInterval(() => {
      this._currentTemperature = this.generateRandomTemperature();
      // Call the protected setData method to update data and notify observers
      this.setData(this._currentTemperature);
      console.log(`[TemperatureReceiver] New temperature: ${this._currentTemperature}°C`);
    }, 3000); // Update every 3 seconds
  }

  public stopSimulating(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = undefined;
      console.log("[TemperatureReceiver] Temperature simulation stopped.");
    }
  }

  // Override getData to return the current temperature
  public getData(): number {
    return this._currentTemperature;
  }
}
