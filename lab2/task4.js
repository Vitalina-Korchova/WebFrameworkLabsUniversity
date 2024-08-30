"use strict";
class Employee {
    constructor(name, age, annualSalary) {
        this.name = name;
        this.age = age;
        this.annualSalary = annualSalary;
    }
}
class Developer extends Employee {
    getAnnualBonus() {
        return (this.annualSalary / 100) * 10;
    }
}
class Manager extends Employee {
    getAnnualBonus() {
        return (this.annualSalary / 100) * 20;
    }
}
class PayableDeveloper extends Developer {
    pay() {
        console.log(`Paying salary: ${this.annualSalary} to Developer: ${this.name}`);
    }
}
class PayableManager extends Manager {
    pay() {
        console.log(`Paying salary: ${this.annualSalary} to Manager: ${this.name}`);
    }
}
const employees = [
    new PayableDeveloper("Nika", 22, 45000),
    new PayableDeveloper("Mike", 32, 60000),
    new PayableManager("Alice", 28, 34000),
    new PayableManager("Viktor", 30, 30000)
];
let totalAnnualBonuses = 0;
employees.forEach(employee => totalAnnualBonuses += employee.getAnnualBonus());
employees.forEach(employee => {
    if (employee instanceof PayableDeveloper || employee instanceof PayableManager) {
        employee.pay();
    }
});
console.log(`Annual number bonuses: ${totalAnnualBonuses}`);
//# sourceMappingURL=task4.js.map