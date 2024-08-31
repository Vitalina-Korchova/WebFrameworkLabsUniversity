interface LibraryItem{
    name:string;
    author:string;
    borrowStatus: boolean;
    borrow(): void;
}

class Book implements LibraryItem{
    numberPages:number;
    name:string;
    author:string;
    borrowStatus:boolean = false;
    constructor(name:string, author:string, numberPages:number, borrowStatus:boolean ){
        this.name = name;
        this.author = author;
        this.numberPages = numberPages;
        this.borrowStatus = borrowStatus;
    }

    borrow(): void {
        this.borrowStatus = true; 
    }
}

class Magazine implements LibraryItem{
    issueNumber: number;
    name:string;
    author:string;
    borrowStatus:boolean = false;

    constructor(name:string, author:string,  issueNumber: number, borrowStatus:boolean ){
        this.name = name;
        this.author = author;
        this.issueNumber = issueNumber;
        this.borrowStatus = borrowStatus;
    }

    borrow(): void {
        this.borrowStatus = true; 
    }
}


class DVD implements LibraryItem{
    duration:number;
    name:string;
    author:string;
    borrowStatus:boolean = false;

    constructor(name:string, author:string,   duration:number, borrowStatus:boolean ){
        this.name = name;
        this.author = author;
        this.duration = duration;
        this.borrowStatus = borrowStatus;
    }

    borrow(): void {
        this.borrowStatus = true; 
    }
}


class Library{
    arrayLibraryItems:LibraryItem[];

    constructor (){
        this.arrayLibraryItems = [];
    }

    addItem(item:LibraryItem): void{
        this.arrayLibraryItems.push(item);
        console.log(`The item ${item.name} was added to Library!`);
    }

    findItemByName(name:string): LibraryItem | undefined{
        return this.arrayLibraryItems.find(item =>item.name === name );
    }

     listAvailableItems(): LibraryItem[] {
        return this.arrayLibraryItems.filter(item => !item.borrowStatus);
    }
}

const library = new Library();

const book1 = new Book("1984", "George Orwell", 328, false);
const magazine1 = new Magazine("Time", "Various Authors", 42, false);
const dvd1 = new DVD("The Matrix", "Wachowski Brothers", 136, false);

library.addItem(book1);
library.addItem(magazine1);
library.addItem(dvd1);

//позичаєм книгу
const item = library.findItemByName("1984");
if(item){
    item.borrow();
    console.log(`${item.name} was borrowed.`);
}


const availableItems = library.listAvailableItems();
console.log("Доступні елементи:");
availableItems.forEach(item => {
    console.log(`${item.name} by author: ${item.author}`);
});