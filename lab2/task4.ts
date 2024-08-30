abstract class Employee{

    protected name:string;
    protected age:number;
    protected annualSalary:number;

    constructor(name:string, age:number,annualSalary:number ){
        this.name = name;
        this.age = age;
        this.annualSalary = annualSalary;
    }

    abstract getAnnualBonus():number;
}

interface Payable{
    pay():void;
}

class Developer extends Employee{
    getAnnualBonus(): number {
       return (this.annualSalary /100) * 10;
    }
}

class Manager extends Employee{
    getAnnualBonus(): number {
        return (this.annualSalary /100) * 20;
    }
}


class PayableDeveloper extends Developer implements Payable{
    pay(): void {
        console.log(`Paying salary: ${this.annualSalary} to Developer: ${this.name}`);
    }
}

class PayableManager extends Manager implements Payable{
    pay(): void {
        console.log(`Paying salary: ${this.annualSalary} to Manager: ${this.name}`);
    }
}

const employees: Employee[] = [
    new PayableDeveloper("Nika", 22, 45000),
    new PayableDeveloper("Mike", 32, 60000),
    new PayableManager("Alice", 28, 34000),
    new PayableManager("Viktor", 30, 30000)
]; 

let totalAnnualBonuses = 0;
employees.forEach(employee => totalAnnualBonuses += employee.getAnnualBonus() );
employees.forEach(employee => {
    if (employee instanceof PayableDeveloper || employee instanceof PayableManager) {
        (employee as Payable).pay();
    }
});
console.log(`Annual number bonuses: ${totalAnnualBonuses}`);