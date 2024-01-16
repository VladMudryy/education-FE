// Inheritance allows a class to inherit properties and methods from another class. This promotes code reusability and helps create a hierarchy of classes.

class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log("Engine started");
  }
}

class ElectricCar extends Car {
  constructor(brand, model, year, batteryCapacity) {
    super(brand, model, year);
    this.batteryCapacity = batteryCapacity;
  }

  charge() {
    console.log("Charging...");
  }
}

let myElectricCar = new ElectricCar("Tesla", "Model S", 2022, "100 kWh");
