import {Book, User, IBook, IUser} from './models';
import {Library} from './library';
import { Storage } from './storage';

export class LibraryService {
    private booksLibrary: Library<Book> = new Library();
    private userLibrary: Library<User> = new Library();
    private borrowStatus: { [bookName: string]: number } = {}; //як map


    constructor() {
        this.loadData();
    }

    addBook (book:Book):void{
        this.booksLibrary.addItem(book);
        this.saveData();
    }

    addUser(user: User): void {
        this.userLibrary.addItem(user);
        this.saveData();
    }

    getAllBooks():Book[]{
        return this.booksLibrary.getAllItems();
    }

    getAllUsers():User[]{
        return this.userLibrary.getAllItems();
    }

    findBook(predicate: (book: Book) => boolean): Book | undefined {
        return this.booksLibrary.findItem(predicate);
    }

    findUser(predicate: (user: User) => boolean): User | undefined {
        return this.userLibrary.findItem(predicate);
    }


    borrowBook(bookName:string, idUser:number):boolean{
        if (this.borrowStatus[bookName]) {
            return false; // книга вже позичена 
        }

        const book = this.findBook(b => b.printInfo().includes(bookName));
        const user = this.findUser(u => u.printInfo().startsWith(idUser.toString()));

        if (book && user) {
            this.borrowStatus[bookName] = idUser;
            this.saveData();
            return true;
        }

        return false;
    }

    returnBook(bookName: string): boolean {
        if (this.borrowStatus[bookName]) {
            delete this.borrowStatus[bookName];
            this.saveData();
            return true;
        }
        return false;
    }

    getBorrowedBooks(): { bookName: string, userId: number }[] {
        return Object.entries(this.borrowStatus).map(([bookName, userId]) => ({ bookName, userId }));
    }

    
    private saveData():void{
        Storage.saveData('books', this.booksLibrary.getAllItems());
        Storage.saveData('users', this.userLibrary.getAllItems());
        Storage.saveData('borrowStatus', this.borrowStatus);
    }

    private loadData():void{
        const books: Book[] = Storage.loadData('books');
        const users: User[] = Storage.loadData('users');
        const borrowStatus: { [bookName: string]: number } = Storage.loadData('borrowStatus');

        books.forEach(book => this.booksLibrary.addItem(new Book(book.nameBook, book.authorBook, book.releaseYearBook)));
        users.forEach(user => this.userLibrary.addItem(new User(user.idUrser, user.nameUser, user.emailUser)));
        this.borrowStatus = borrowStatus;
    }

    clearBooks(): void {
        this.booksLibrary.clear(); 
        this.saveData();
        Storage.clearData('book_items');
    }

    clearUsers():void{
        this.userLibrary.clear();
        this.saveData();
        Storage.clearData('user_items');
    }
}
