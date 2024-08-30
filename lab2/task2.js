var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    Circle.prototype.getPerimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    Circle.prototype.scale = function (factor) {
        this.radius *= factor;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.width + this.height);
    };
    Rectangle.prototype.scale = function (factor) {
        this.width *= factor;
        this.height *= factor;
    };
    return Rectangle;
}());
var Triangle = /** @class */ (function () {
    function Triangle(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    Triangle.prototype.getArea = function () {
        var s = (this.sideA + this.sideB + this.sideC) / 2;
        return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
    };
    Triangle.prototype.getPerimeter = function () {
        return this.sideA + this.sideB + this.sideC;
    };
    Triangle.prototype.scale = function (factor) {
        this.sideA *= factor;
        this.sideB *= factor;
        this.sideC *= factor;
    };
    return Triangle;
}());
var shapes = [
    new Circle(8),
    new Rectangle(5, 8),
    new Triangle(4, 7, 9)
];
var totalArea = 0;
var totalPerimetr = 0;
shapes.forEach(function (shape) {
    totalArea += shape.getArea();
    totalPerimetr += shape.getPerimeter();
});
console.log("\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u043F\u043B\u043E\u0449\u0430 \u0432\u0441\u0456\u0445 \u0444\u0456\u0433\u0443\u0440: ".concat(totalArea));
console.log("\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0438\u0439 \u043F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u0432\u0441\u0456\u0445 \u0444\u0456\u0433\u0443\u0440: ".concat(totalPerimetr));
console.log("");
console.log("З кофіцієнтом масштабу:");
console.log("");
shapes.forEach(function (shape) { return shape.scale(2); });
var totalAreaNew = 0;
var totalPerimetrNew = 0;
shapes.forEach(function (shape) {
    totalAreaNew += shape.getArea();
    totalPerimetrNew += shape.getPerimeter();
});
console.log("\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0430 \u043F\u043B\u043E\u0449\u0430 \u0432\u0441\u0456\u0445 \u0444\u0456\u0433\u0443\u0440 \u0437 \u043A\u043E\u0435\u0444\u0456\u0446\u0456\u0454\u043D\u0442\u043E\u043C: ".concat(totalAreaNew));
console.log("\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0438\u0439 \u043F\u0435\u0440\u0438\u043C\u0435\u0442\u0440 \u0432\u0441\u0456\u0445 \u0444\u0456\u0433\u0443\u0440 \u0437 \u043A\u043E\u0435\u0444\u0456\u0446\u0456\u0454\u043D\u0442\u043E\u043C: ".concat(totalPerimetrNew));
