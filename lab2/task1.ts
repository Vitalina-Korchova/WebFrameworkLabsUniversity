interface Animal {
    name: string;
    species:string;

    move():void; //пересуванн
    makeSound():void;  //звук
    averageYearsLives():number;  //середня тривалість життя
}

class Cat implements Animal {
    name: string;
    species: string;

    constructor( name: string, species: string){
        this.name = name;
        this.species = species;
    }

    move(): void {
        console.log(`${this.name} ходить на чотирьох лапках!`);
    }

    makeSound(): void {
        console.log(`${this.species}, цей вид тварин створює такий звук "Мяу-мяу"!`)
    }

    averageYearsLives(): number {
        return 15;
    }
}


class Bird implements Animal{
    name: string;
    species: string;

    constructor( name: string, species: string){
        this.name = name;
        this.species = species;
    }

    move(): void {
        console.log(`${this.name} літає за допомогою крил!`);
    }

    makeSound(): void {
        console.log(`${this.species}, цей вид тварин створює такий звук "Трік-трік"!`)
    }

    averageYearsLives(): number {
        return 60;
    }

}

class Fish implements Animal{
    name: string;
    species: string;

    constructor( name: string, species: string){
        this.name = name;
        this.species = species;
    }

    move(): void {
        console.log(`${this.name} плаває у воді!`);
    }

    makeSound(): void {
        console.log(`${this.species}, цей вид тварин створює такий звук "Буль-буль"!`)
    }

    averageYearsLives(): number {
        return 20;
    }
    
}

const myCat = new Cat("Люцик","Шотландский вислоухий кіт");
myCat.move();
myCat.makeSound();
let yearsC:number = myCat.averageYearsLives();
console.log(`Середня тривалість життя ${yearsC} років`);
console.log("");

const myBird = new Bird("Пепе","Папуга звичайна");
myBird.move();
myBird.makeSound();
let yearsB:number = myBird.averageYearsLives();
console.log(`Середня тривалість життя ${yearsB} років`);
console.log("");

const myFish = new Fish("Тарас","Окунь звичайни");
myFish.move();
myFish.makeSound();
let yearsF:number = myFish.averageYearsLives();
console.log(`Середня тривалість життя ${yearsF} років`);
console.log("");