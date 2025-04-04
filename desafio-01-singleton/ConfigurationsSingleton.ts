import fileConfig from "./config.json";

export class ConfigurationsSingleton {
  private static instance: ConfigurationsSingleton;
  private configurations: typeof fileConfig;

  private constructor() {
    this.configurations = fileConfig;
    console.log("A instace of ConfigurationsSingleton was created!");
  }

  public static getInstance(): ConfigurationsSingleton {
    if (!this.instance) {
      this.instance = new ConfigurationsSingleton();
    }
    return this.instance;
  }

  public getConfigurations(key: keyof typeof fileConfig): Object {
    return this.configurations[key];
  }
}
