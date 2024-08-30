"use strict";
class Car {
    constructor(brand, model, price, yearReleased) {
        this.model = model;
        this.price = price;
        this.yearReleased = yearReleased;
        this.brand = brand;
    }
}
class Ford extends Car {
    constructor(model, price, yearReleased, isElectric) {
        super("Ford", model, price, yearReleased);
        this.isElectric = isElectric;
    }
    dispalyInfo() {
        console.log(`The brand: ${this.brand}, the model: ${this.model}, the price: ${this.price}$, the year of Release: ${this.yearReleased},  is electric? ${this.isElectric ? "Yes" : "No"} `);
    }
}
class Toyota extends Car {
    constructor(model, price, yearReleased, engineType) {
        super("Toyota", model, price, yearReleased);
        this.transmissionType = engineType;
    }
    dispalyInfo() {
        console.log(`The brand: ${this.brand}, the model: ${this.model}, the price: ${this.price}$, the year of Release: ${this.yearReleased}, the engine type: ${this.transmissionType}`);
    }
}
class BMW extends Car {
    constructor(model, price, yearReleased, numberPassengers) {
        super("BMW", model, price, yearReleased);
        this.numberPassengers = numberPassengers;
    }
    dispalyInfo() {
        console.log(`The brand: ${this.brand}, the model: ${this.model}, the price: ${this.price}$, the year of Release: ${this.yearReleased}, the number of passengers: ${this.numberPassengers}`);
    }
}
const ford1 = new Ford("Ford Mustang", 55000, 2024, false);
const ford2 = new Ford("Ford Mach-E", 48000, 2023, true);
ford1.dispalyInfo();
ford2.dispalyInfo();
const toyota1 = new Toyota("Toyota Corolla", 25000, 2024, "Automatic");
const toyota2 = new Toyota("Toyota bZ4X", 42000, 2023, "Automatic");
toyota1.dispalyInfo();
toyota2.dispalyInfo();
const bmw1 = new BMW("BMW 3 Series", 45000, 2023, 5);
const bmw2 = new BMW("BMW iX", 85000, 2024, 5);
bmw1.dispalyInfo();
bmw2.dispalyInfo();
//# sourceMappingURL=task3.js.map