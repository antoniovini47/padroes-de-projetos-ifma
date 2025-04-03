type ConfigurationsKeyOptions = "DB" | "USER" | "PASSWORD";

class ConfigurationsSingleton {
  private static instance: ConfigurationsSingleton;
  private configurations: Object;

  private constructor() {
    const fs = require("fs");
    const path = require("path");
    const configPath = path.join(__dirname, "config.json");
    const config = fs.readFileSync(configPath, "utf8");
    this.configurations = JSON.parse(config);

    console.log("A instace of ConfigurationsSingleton was created!");
  }

  public static getInstance(): ConfigurationsSingleton {
    if (!this.instance) {
      this.instance = new ConfigurationsSingleton();
    }
    return this.instance;
  }

  public getConfigurations(key: ConfigurationsKeyOptions): Object {
    return this.configurations[key];
  }
}

// Testing the Singleton

//const config1 = new ConfigurationsSingleton(); // Wont work

const config2 = ConfigurationsSingleton.getInstance();
console.log(config2.getConfigurations("DB"));
const config3 = ConfigurationsSingleton.getInstance();
console.log(config3.getConfigurations("USER"));
const config4 = ConfigurationsSingleton.getInstance();
console.log(config4.getConfigurations("PASSWORD"));
