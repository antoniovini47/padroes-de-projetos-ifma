import { ConfigurationsSingleton } from "./index";

// Testing the Singleton

//const config1 = new ConfigurationsSingleton(); // Wont work

const config2 = ConfigurationsSingleton.getInstance();
console.log(config2.getConfigurations("DB"));
const config3 = ConfigurationsSingleton.getInstance();
console.log(config3.getConfigurations("USER"));
const config4 = ConfigurationsSingleton.getInstance();
console.log(config4.getConfigurations("PASSWORD"));
console.log(config4.getConfigurations("HOST"));
