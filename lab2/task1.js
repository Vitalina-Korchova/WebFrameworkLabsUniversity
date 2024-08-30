"use strict";
class Cat {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    move() {
        console.log(`${this.name} ходить на чотирьох лапках!`);
    }
    makeSound() {
        console.log(`${this.species}, цей вид тварин створює такий звук "Мяу-мяу"!`);
    }
    averageYearsLives() {
        return 15;
    }
}
class Bird {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    move() {
        console.log(`${this.name} літає за допомогою крил!`);
    }
    makeSound() {
        console.log(`${this.species}, цей вид тварин створює такий звук "Трік-трік"!`);
    }
    averageYearsLives() {
        return 60;
    }
}
class Fish {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    move() {
        console.log(`${this.name} плаває у воді!`);
    }
    makeSound() {
        console.log(`${this.species}, цей вид тварин створює такий звук "Буль-буль"!`);
    }
    averageYearsLives() {
        return 20;
    }
}
const myCat = new Cat("Люцик", "Шотландский вислоухий кіт");
myCat.move();
myCat.makeSound();
let yearsC = myCat.averageYearsLives();
console.log(`Середня тривалість життя ${yearsC} років`);
console.log("");
const myBird = new Bird("Пепе", "Папуга звичайна");
myBird.move();
myBird.makeSound();
let yearsB = myBird.averageYearsLives();
console.log(`Середня тривалість життя ${yearsB} років`);
console.log("");
const myFish = new Fish("Тарас", "Окунь звичайни");
myFish.move();
myFish.makeSound();
let yearsF = myFish.averageYearsLives();
console.log(`Середня тривалість життя ${yearsF} років`);
console.log("");
//# sourceMappingURL=task1.js.map