import { TemperatureReceiver } from "./TemperatureReceiver";
import { ConsoleTemperatureShower } from "./ConsoleTemperatureShower";

function runRecieverShowerPatternExample() {
  console.log("--- Starting Reciever Shower Pattern Example ---");

  // 1. Create a Receiver
  const temperatureReceiver = new TemperatureReceiver();

  // 2. Create Showers
  const consoleShower1 = new ConsoleTemperatureShower("Main Console Display - LCD");
  const consoleShower2 = new ConsoleTemperatureShower(
    "Secondary Console Display - 7 Segment Display"
  );

  // 3. Connect Showers to the Receiver (Subscription)
  temperatureReceiver.subscribe(consoleShower1);
  temperatureReceiver.subscribe(consoleShower2);

  console.log("\nShowers are now subscribed and will receive temperature updates.\n");

  // Simulate some time passing
  setTimeout(() => {
    console.log("\n--- Unsubscribing Secondary Console Display ---");
    temperatureReceiver.unsubscribe(consoleShower2);
  }, 10000); // After 10 seconds, unsubscribe one shower

  setTimeout(() => {
    console.log("\n--- Stopping Temperature Simulation ---");
    temperatureReceiver.stopSimulating();
    console.log("\n--- DataFlow Pattern Example Finished ---");
  }, 20000);
  // Stop simulation after 20 seconds
}

runRecieverShowerPatternExample();
