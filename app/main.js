import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  valuesController = new ValuesController();
  // animalController = new AnimalController
}

window["app"] = new App();
