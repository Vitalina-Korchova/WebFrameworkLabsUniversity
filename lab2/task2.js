"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }
    scale(factor) {
        this.radius *= factor;
    }
}
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    getArea() {
        return this.width * this.height;
    }
    getPerimeter() {
        return 2 * (this.width + this.height);
    }
    scale(factor) {
        this.width *= factor;
        this.height *= factor;
    }
}
class Triangle {
    constructor(sideA, sideB, sideC) {
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }
    getArea() {
        const s = (this.sideA + this.sideB + this.sideC) / 2;
        return Math.sqrt(s * (s - this.sideA) * (s - this.sideB) * (s - this.sideC));
    }
    getPerimeter() {
        return this.sideA + this.sideB + this.sideC;
    }
    scale(factor) {
        this.sideA *= factor;
        this.sideB *= factor;
        this.sideC *= factor;
    }
}
const shapes = [
    new Circle(8),
    new Rectangle(5, 8),
    new Triangle(4, 7, 9)
];
let totalArea = 0;
let totalPerimetr = 0;
shapes.forEach(shape => {
    totalArea += shape.getArea();
    totalPerimetr += shape.getPerimeter();
});
console.log(`Загальна площа всіх фігур: ${totalArea}`);
console.log(`Загальний периметр всіх фігур: ${totalPerimetr}`);
console.log("");
console.log("З кофіцієнтом масштабу:");
console.log("");
shapes.forEach(shape => shape.scale(2));
let totalAreaNew = 0;
let totalPerimetrNew = 0;
shapes.forEach(shape => {
    totalAreaNew += shape.getArea();
    totalPerimetrNew += shape.getPerimeter();
});
console.log(`Загальна площа всіх фігур з коефіцієнтом: ${totalAreaNew}`);
console.log(`Загальний периметр всіх фігур з коефіцієнтом: ${totalPerimetrNew}`);
//# sourceMappingURL=task2.js.map