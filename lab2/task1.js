var Cat = /** @class */ (function () {
    function Cat(name, species) {
        this.name = name;
        this.species = species;
    }
    Cat.prototype.move = function () {
        console.log("".concat(this.name, " \u0445\u043E\u0434\u0438\u0442\u044C \u043D\u0430 \u0447\u043E\u0442\u0438\u0440\u044C\u043E\u0445 \u043B\u0430\u043F\u043A\u0430\u0445!"));
    };
    Cat.prototype.makeSound = function () {
        console.log("".concat(this.species, ", \u0446\u0435\u0439 \u0432\u0438\u0434 \u0442\u0432\u0430\u0440\u0438\u043D \u0441\u0442\u0432\u043E\u0440\u044E\u0454 \u0442\u0430\u043A\u0438\u0439 \u0437\u0432\u0443\u043A \"\u041C\u044F\u0443-\u043C\u044F\u0443\"!"));
    };
    Cat.prototype.averageYearsLives = function () {
        return 15;
    };
    return Cat;
}());
var Bird = /** @class */ (function () {
    function Bird(name, species) {
        this.name = name;
        this.species = species;
    }
    Bird.prototype.move = function () {
        console.log("".concat(this.name, " \u043B\u0456\u0442\u0430\u0454 \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E \u043A\u0440\u0438\u043B!"));
    };
    Bird.prototype.makeSound = function () {
        console.log("".concat(this.species, ", \u0446\u0435\u0439 \u0432\u0438\u0434 \u0442\u0432\u0430\u0440\u0438\u043D \u0441\u0442\u0432\u043E\u0440\u044E\u0454 \u0442\u0430\u043A\u0438\u0439 \u0437\u0432\u0443\u043A \"\u0422\u0440\u0456\u043A-\u0442\u0440\u0456\u043A\"!"));
    };
    Bird.prototype.averageYearsLives = function () {
        return 60;
    };
    return Bird;
}());
var Fish = /** @class */ (function () {
    function Fish(name, species) {
        this.name = name;
        this.species = species;
    }
    Fish.prototype.move = function () {
        console.log("".concat(this.name, " \u043F\u043B\u0430\u0432\u0430\u0454 \u0443 \u0432\u043E\u0434\u0456!"));
    };
    Fish.prototype.makeSound = function () {
        console.log("".concat(this.species, ", \u0446\u0435\u0439 \u0432\u0438\u0434 \u0442\u0432\u0430\u0440\u0438\u043D \u0441\u0442\u0432\u043E\u0440\u044E\u0454 \u0442\u0430\u043A\u0438\u0439 \u0437\u0432\u0443\u043A \"\u0411\u0443\u043B\u044C-\u0431\u0443\u043B\u044C\"!"));
    };
    Fish.prototype.averageYearsLives = function () {
        return 20;
    };
    return Fish;
}());
var myCat = new Cat("Люцик", "Шотландский вислоухий кіт");
myCat.move();
myCat.makeSound();
var yearsC = myCat.averageYearsLives();
console.log("\u0421\u0435\u0440\u0435\u0434\u043D\u044F \u0442\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C \u0436\u0438\u0442\u0442\u044F ".concat(yearsC, " \u0440\u043E\u043A\u0456\u0432"));
console.log("");
var myBird = new Bird("Пепе", "Папуга звичайна");
myBird.move();
myBird.makeSound();
var yearsB = myBird.averageYearsLives();
console.log("\u0421\u0435\u0440\u0435\u0434\u043D\u044F \u0442\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C \u0436\u0438\u0442\u0442\u044F ".concat(yearsB, " \u0440\u043E\u043A\u0456\u0432"));
console.log("");
var myFish = new Fish("Тарас", "Окунь звичайни");
myFish.move();
myFish.makeSound();
var yearsF = myFish.averageYearsLives();
console.log("\u0421\u0435\u0440\u0435\u0434\u043D\u044F \u0442\u0440\u0438\u0432\u0430\u043B\u0456\u0441\u0442\u044C \u0436\u0438\u0442\u0442\u044F ".concat(yearsF, " \u0440\u043E\u043A\u0456\u0432"));
console.log("");
