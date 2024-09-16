import {Book, User, IBook, IUser} from './models';
import {Library} from './library';
import { Storage } from './storage';
import { Modal } from './modal';

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


    borrowBook(bookName: string, idUser: number): boolean {

        const user = this.findUser(u => u.idUser === idUser);
        const book = this.findBook(b => b.nameBook === bookName);
    
        console.log(`Found Book: ${book ? book.nameBook : 'Not Found'}`);
        console.log(`Found User: ${user ? user.idUser : 'Not Found'}`);
    
        
        if (user && user.borrowedBooksCount >= 3) {
            Modal.showErrorModal();  
            Modal.hideBorrowModal();
            return false;
        }
    
        
        if (this.borrowStatus[bookName]) {
            console.log("The book is already borrowed.");
            return false; 
        }
    
    
        if (book && user) {
            user.borrowedBooksCount++;  
            this.borrowStatus[bookName] = idUser;  
            this.saveData();  
            Modal.showSuccessModal();  
            return true;
        }
    
        
        return false;
    }
    


    returnBook(bookName: string): boolean {
        const userId = this.borrowStatus[bookName];
        if (userId) {
            const user = this.findUser(u => u.idUser === userId);
            if (user) {
                user.borrowedBooksCount--;  // Зменшення кількості позичених книг
            }
            delete this.borrowStatus[bookName];  // Видалення статусу позиченої книги
            this.saveData();  // Збереження оновлених даних
            return true;
        }
        return false;
    }
    

    getBorrowedBooks(): { bookName: string, userId: number }[] {
        return Object.entries(this.borrowStatus).map(([bookName, userId]) => ({ bookName, userId }));
    }

    //Метод Object.entries приймає об'єкт (в даному випадку this.borrowStatus) 
    //і повертає масив пар [ключ, значення], де кожна пара є масивом, що представляє ключ і значення з об'єкта

    
    private saveData():void{
        Storage.saveData('books', this.booksLibrary.getAllItems());
        Storage.saveData('users', this.userLibrary.getAllItems());
        Storage.saveData('borrowStatus', this.borrowStatus);
    }

    private loadData(): void {
        const books: Book[] = Storage.loadData('books') || [];
        const users: User[] = Storage.loadData('users') || [];
        this.borrowStatus = Storage.loadData('borrowStatus') || {};

        this.booksLibrary.clear();
        this.userLibrary.clear();

        books.forEach(bookData => {
            const book = new Book(bookData.nameBook, bookData.authorBook, bookData.releaseYearBook);
            this.booksLibrary.addItem(book);
        });

        users.forEach(userData => {
            const user = new User(userData.idUser, userData.nameUser, userData.emailUser);
            user.borrowedBooksCount = 0; 
            this.userLibrary.addItem(user);
        });

         // Оновлення кількості позичених книг на основі borrowStatus
        Object.values(this.borrowStatus).forEach(userId => {
            const user = this.findUser(u => u.idUser === userId);
            if (user) {
                user.borrowedBooksCount++;  // Збільшуємо кількість позичених книг
            }
        });
    }


    clearBooks(): void {
        this.booksLibrary.clear(); 
        this.borrowStatus = {};
        this.saveData();
        Storage.clearData('book_items');
    }

    clearUsers(): void {
        this.userLibrary.clear();
        this.borrowStatus = {};
        this.saveData();
        Storage.clearData('user_items');
    }

    
}
