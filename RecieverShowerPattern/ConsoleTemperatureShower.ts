import { IDataShower } from "./IDataShower";

export class ConsoleTemperatureShower implements IDataShower<number> {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public update(temperature: number): void {
    console.log(`[${this.name}] Displaying temperature: ${temperature}°C`);
  }
}
