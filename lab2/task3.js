var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car(brand, model, price, yearReleased) {
        this.model = model;
        this.price = price;
        this.yearReleased = yearReleased;
        this.brand = brand;
    }
    return Car;
}());
var Ford = /** @class */ (function (_super) {
    __extends(Ford, _super);
    function Ford(model, price, yearReleased, isElectric) {
        var _this = _super.call(this, "Ford", model, price, yearReleased) || this;
        _this.isElectric = isElectric;
        return _this;
    }
    Ford.prototype.dispalyInfo = function () {
        console.log("The brand: ".concat(this.brand, ", the model: ").concat(this.model, ", the price: ").concat(this.price, "$, the year of Release: ").concat(this.yearReleased, ",  is electric? ").concat(this.isElectric ? "Yes" : "No", " "));
    };
    return Ford;
}(Car));
var Toyota = /** @class */ (function (_super) {
    __extends(Toyota, _super);
    function Toyota(model, price, yearReleased, engineType) {
        var _this = _super.call(this, "Toyota", model, price, yearReleased) || this;
        _this.transmissionType = engineType;
        return _this;
    }
    Toyota.prototype.dispalyInfo = function () {
        console.log("The brand: ".concat(this.brand, ", the model: ").concat(this.model, ", the price: ").concat(this.price, "$, the year of Release: ").concat(this.yearReleased, ", the engine type: ").concat(this.transmissionType));
    };
    return Toyota;
}(Car));
var BMW = /** @class */ (function (_super) {
    __extends(BMW, _super);
    function BMW(model, price, yearReleased, numberPassengers) {
        var _this = _super.call(this, "BMW", model, price, yearReleased) || this;
        _this.numberPassengers = numberPassengers;
        return _this;
    }
    BMW.prototype.dispalyInfo = function () {
        console.log("The brand: ".concat(this.brand, ", the model: ").concat(this.model, ", the price: ").concat(this.price, "$, the year of Release: ").concat(this.yearReleased, ", the number of passengers: ").concat(this.numberPassengers));
    };
    return BMW;
}(Car));
var ford1 = new Ford("Ford Mustang", 55000, 2024, false);
var ford2 = new Ford("Ford Mach-E", 48000, 2023, true);
ford1.dispalyInfo();
ford2.dispalyInfo();
var toyota1 = new Toyota("Toyota Corolla", 25000, 2024, "Automatic");
var toyota2 = new Toyota("Toyota bZ4X", 42000, 2023, "Automatic");
toyota1.dispalyInfo();
toyota2.dispalyInfo();
var bmw1 = new BMW("BMW 3 Series", 45000, 2023, 5);
var bmw2 = new BMW("BMW iX", 85000, 2024, 5);
bmw1.dispalyInfo();
bmw2.dispalyInfo();
