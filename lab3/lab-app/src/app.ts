import { Book, User } from './models';
import { LibraryService } from './services';
import { ValidationBook, ValidationUser } from './validation';
import { Modal } from './modal';

class App {
    private libraryService: LibraryService;

    constructor() {
        this.libraryService = new LibraryService();
        this.initializeApp();
    }

    private initializeApp(): void {
        this.loadDataFromLocalStorage();
        this.renderBooks();
        this.renderUsers();
        this.setupEventListeners();  //налаштування обробника подій
    }

    private loadDataFromLocalStorage(): void {
        //перевірка масивів
        console.log(this.libraryService.getAllBooks());
        console.log(this.libraryService.getAllUsers());
        
        // показ книжок та юзерів  оновлення інтерфейсу
        this.renderBooks();
        this.renderUsers();
    }

    private renderBooks(): void {
        const containerBooks = document.querySelector('.book_items');
        if (containerBooks) {
            containerBooks.innerHTML = ''; //очищаємо контейнер
            this.libraryService.getAllBooks().forEach(book => {
                this.renderBookItem(book, containerBooks);
            });
        }
    }

    private renderUsers(): void {
        const containerUsers = document.querySelector('.user_items');
        if (containerUsers) {
            containerUsers.innerHTML = '';
            this.libraryService.getAllUsers().forEach(user => {
                this.renderUserItem(user, containerUsers);
            });
        }
    }

    private renderBookItem(book: Book, container: Element): void {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        bookItem.dataset.bookName = book.nameBook;

        const innerItem = document.createElement('div');
        innerItem.classList.add('d-flex', 'justify-content-between');

        const textElement = document.createElement('span');
        textElement.textContent = book.printInfo();
        textElement.classList.add('fs-5');

        const buttonStatus = document.createElement('button');
        buttonStatus.textContent = "Позичити";
        buttonStatus.type = 'button';
        buttonStatus.classList.add('btnBorrowOff', 'btn', 'btn-primary', 'btn-sm');

        //перевірка чи позичена книга
        //перевіряється чи є запис про те, що книга вже позичена
        const borrowStatus = this.libraryService.getBorrowedBooks().find(b => b.bookName === book.nameBook);
        if (borrowStatus) {
            buttonStatus.style.display = 'none';
            const returnButton = this.createReturnButton(book.nameBook, borrowStatus.userId);
            innerItem.appendChild(returnButton);
            innerItem.classList.add('flex-row-reverse');
        } else {
            Modal.showBorrowModal(buttonStatus);
        }

        innerItem.appendChild(textElement);
        innerItem.appendChild(buttonStatus);

        const line = document.createElement('hr');
        bookItem.appendChild(innerItem);
        bookItem.appendChild(line);

        container.appendChild(bookItem);
    }

    private renderUserItem(user: User, container: Element): void {
        const userItem = document.createElement('div');
        userItem.classList.add('user-item');
        userItem.dataset.userId = user.idUser.toString();

        const innerUser = document.createElement('div');
        innerUser.classList.add('d-flex', 'justify-content-between');

        const textElement = document.createElement('span');
        textElement.textContent = user.printInfo();
        textElement.classList.add('fs-5');

        const line = document.createElement('hr');
        innerUser.appendChild(textElement);
        userItem.appendChild(innerUser);
        userItem.appendChild(line);

        container.appendChild(userItem);
    }

    private setupEventListeners(): void {
        this.setupBookListeners();
        this.setupUserListeners();
        this.setupModalListeners();
    }

    private setupBookListeners(): void {
        const addBookButton = document.querySelector('.input_add_book');
        const clearBooksButton = document.querySelector('.btn_clear_books');

        if (addBookButton) {
            addBookButton.addEventListener('click', this.handleAddBook.bind(this)); //прив'язаний до контексту класу App
        }

        if (clearBooksButton) {
            clearBooksButton.addEventListener('click', this.handleClearBooks.bind(this));
        }
    }

    private setupUserListeners(): void {
        const addUserButton = document.querySelector('.input_add_user');
        const clearUsersButton = document.querySelector('.btn_clear_users');

        if (addUserButton) {
            addUserButton.addEventListener('click', this.handleAddUser.bind(this));
        }

        if (clearUsersButton) {
            clearUsersButton.addEventListener('click', this.handleClearUsers.bind(this));
        }
    }

    private setupModalListeners(): void {
        document.addEventListener('click', (event) => {   //реагує на всі кліки
            const target = event.target as HTMLElement;
            if (target.classList.contains('btnBorrowOff')) {
                this.handleBorrowButtonClick(target);
            } else if (target.classList.contains('btnReturn')) {
                this.handleReturnButtonClick(target);
            }
        });

        const btnSave = document.getElementById('btn_save');
        if (btnSave) {
            btnSave.addEventListener('click', this.handleSaveBorrow.bind(this));
        }
    }

    private handleAddBook(event: Event): void {
        event.preventDefault();
        const nameBook = (document.querySelector('.input_name_book') as HTMLInputElement)?.value;
        const authorBook = (document.querySelector('.input_author_book') as HTMLInputElement)?.value;
        const releaseYear = (document.querySelector('.input_release_year') as HTMLInputElement)?.value;

        if (ValidationBook()) {
            const book = new Book(nameBook, authorBook, parseInt(releaseYear));
            this.libraryService.addBook(book);
            this.renderBooks();
        }
    }

    private handleClearBooks(): void {
        this.libraryService.clearBooks();
        this.renderBooks();
    }

    private handleAddUser(event: Event): void {
        event.preventDefault();
        const nameUser = (document.querySelector('.input_username') as HTMLInputElement)?.value;
        const emailUser = (document.querySelector('.input_email') as HTMLInputElement)?.value;

        if (ValidationUser()) {
            const idUser = this.getNextUserId();
            const user = new User(idUser, nameUser, emailUser);
            this.libraryService.addUser(user);
            this.renderUsers();
        }
    }

    private handleClearUsers(): void {
        this.libraryService.clearUsers();
        this.renderUsers();
        localStorage.removeItem('lastUserId');
    }

    private handleBorrowButtonClick(button: HTMLElement): void {
        const bookItem = button.closest('.book-item');  //повертає найближчого батьків елмент 
        if (bookItem) { 
            const bookName = (bookItem as HTMLElement).dataset.bookName;  //Отримання значення атрибута data-book-name з елемента bookItem
            if (bookName) {
                (button as HTMLElement).dataset.bookName = bookName;  //дозволяє кнопці зберігати інформацію про книгу, яка прив'язана до цієї кнопки.
            }
        }
    }
    

    private handleReturnButtonClick(button: HTMLElement): void {
        const bookName = button.dataset.bookName;   //отримує значення атрибута data-book-name з кнопки. Цей атрибут містить ім'я книги, яка повертається
        const userId = button.dataset.userId;
        if (bookName && userId) {
            this.libraryService.returnBook(bookName);
            this.renderBooks();
            this.updateUserBorrowedCount(parseInt(userId));
        }
    }

    private handleSaveBorrow(): void {
        const inputIdUser = document.getElementById('input_borrow') as HTMLInputElement;
        const activeBookButton = document.querySelector('.btnBorrowOff[data-book-name]') as HTMLElement;

        if (activeBookButton && inputIdUser) {
            const userId = inputIdUser.value.trim();
            const bookName = activeBookButton.dataset.bookName;

            if (userId && bookName) {
                const isBorrowed = this.libraryService.borrowBook(bookName, parseInt(userId));
                if (isBorrowed) {
                    this.renderBooks();
                    this.updateUserBorrowedCount(parseInt(userId));
                    Modal.hideBorrowModal();
                }
            }
        }
    }

    private createReturnButton(bookName: string, userId: number): HTMLElement {
        const returnButton = document.createElement('button');
        returnButton.textContent = 'Повернути';
        returnButton.classList.add('btn', 'btn-warning', 'btnReturn', 'btn-sm');
        returnButton.dataset.bookName = bookName;
        returnButton.dataset.userId = userId.toString();
        return returnButton;
    }

    private updateUserBorrowedCount(userId: number): void {
        const user = this.libraryService.findUser(u => u.idUser === userId);
        if (user) {
            const userItem = document.querySelector(`.user-item[data-user-id="${userId}"]`); //використовується для знаходження HTML-елемента з класом user-item і атрибутом data-user-id, що відповідає userId
            if (userItem) {
                const textElement = userItem.querySelector('span');
                if (textElement) {
                    textElement.textContent = user.printInfo();
                }
            }
        }
    }

    private getNextUserId(): number {
        const lastUserId = parseInt(localStorage.getItem('lastUserId') || '0');
        const nextUserId = lastUserId + 1;
        localStorage.setItem('lastUserId', nextUserId.toString());
        return nextUserId;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    new App();
});