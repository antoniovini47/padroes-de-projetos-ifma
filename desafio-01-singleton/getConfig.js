const fs = require("fs");

counter = 0;

class Config {
  #instance;
  #configs;

  constructor() {
    if (this.#instance) {
      return this.#instance;
    }

    const configFile = fs.readFileSync("./config.json", "utf-8");
    this.#configs = JSON.parse(configFile);
    console.log(`${++counter} classe(s) Config foi criada.`); //DEBUG, Instances counter

    this.#instance = this;
  }

  getConfig(key) {
    return this.#configs[key];
  }
}

module.exports = new Config();
