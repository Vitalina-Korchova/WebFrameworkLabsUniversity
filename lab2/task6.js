"use strict";
class Book {
    constructor(name, author, numberPages, borrowStatus) {
        this.borrowStatus = false;
        this.name = name;
        this.author = author;
        this.numberPages = numberPages;
        this.borrowStatus = borrowStatus;
    }
    borrow() {
        this.borrowStatus = true;
    }
}
class Magazine {
    constructor(name, author, issueNumber, borrowStatus) {
        this.borrowStatus = false;
        this.name = name;
        this.author = author;
        this.issueNumber = issueNumber;
        this.borrowStatus = borrowStatus;
    }
    borrow() {
        this.borrowStatus = true;
    }
}
class DVD {
    constructor(name, author, duration, borrowStatus) {
        this.borrowStatus = false;
        this.name = name;
        this.author = author;
        this.duration = duration;
        this.borrowStatus = borrowStatus;
    }
    borrow() {
        this.borrowStatus = true;
    }
}
class Library {
    constructor() {
        this.arrayLibraryItems = [];
    }
    addItem(item) {
        this.arrayLibraryItems.push(item);
        console.log(`The item ${item.name} was added to Library!`);
    }
    findItemByName(name) {
        return this.arrayLibraryItems.find(item => item.name === name);
    }
    listAvailableItems() {
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
if (item) {
    item.borrow();
    console.log(`${item.name} was borrowed.`);
}
const availableItems = library.listAvailableItems();
console.log("Доступні елементи:");
availableItems.forEach(item => {
    console.log(`${item.name} by author: ${item.author}`);
});
//# sourceMappingURL=task6.js.map