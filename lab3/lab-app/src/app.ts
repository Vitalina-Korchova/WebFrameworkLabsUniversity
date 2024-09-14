// import all modules here
import {Book, User} from './models';
import {LibraryService} from './services';
import { Storage } from './storage';
import { ValidationBook, ValidationUser } from './validation';
import { Modal } from './modal';
// etc.

class App {

    private libraryService: LibraryService;
    
    constructor (){
        this.libraryService = new LibraryService();
        console.log (this.libraryService.getAllBooks());
        console.log (this.libraryService.getAllUsers());
        this.loadDataFromLocalStorage();
        this.blockBooks();
        this.blockUsers();
    }

    loadDataFromLocalStorage():void{
        // Завантаження збережених елементів з localStorage книги
        const savedBooksHTML = Storage.loadElementState('book_items');
        const containerBooks = document.querySelector('.book_items');
        if (containerBooks && savedBooksHTML) {
            containerBooks.innerHTML = savedBooksHTML;
        }

        this.blockModal();

        // Завантаження збережених елементів з localStorage книги  юзери
        const savedUsersHTML = Storage.loadElementState('user_items');
        const containerUsers = document.querySelector('.user_items');
        if (containerUsers && savedUsersHTML) {
            containerUsers.innerHTML = savedUsersHTML;
        }

    }

    blockBooks():void{
        document.querySelector('.btn_clear_books')?.addEventListener('click', ()=>{
            this.libraryService.clearBooks();
            const containerBooks = document.querySelector('.book_items');
            if (containerBooks) {
                containerBooks.innerHTML = '';  
            }

             Storage.clearData('book_items');
        });

        document.querySelector('.input_add_book')?.addEventListener('click', (event)=>{
            //console.log('Add book button clicked');
            event.preventDefault(); 
            const containerBooks = document.querySelector('.book_items');
            const nameBook = (document.querySelector('.input_name_book') as HTMLInputElement)?.value;    //перевторення на строки
            const authorBook = (document.querySelector('.input_author_book') as HTMLInputElement)?.value;
            const releaseYear = (document.querySelector('.input_release_year') as HTMLInputElement)?.value;

            if(ValidationBook()){
                const book = new Book(nameBook,authorBook, parseInt(releaseYear) );
                this.libraryService.addBook(book);
                //створення елемента
                const bookItem = document.createElement('div');
                const innerItem = document.createElement('div');
                innerItem.classList.add('d-flex', 'justify-content-between');
                const textElement = document.createElement('span');
                textElement.textContent = book.printInfo();        //функція виведення інфи
                textElement.classList.add('fs-5');
                const buttonStatus = document.createElement('button');
                buttonStatus.textContent = "Позичити";
                buttonStatus.type = 'button';
                buttonStatus.classList.add('btnBorrowOff','btn', 'btn-primary', 'btn-sm');
                Modal.showBorrowModal(buttonStatus);
                const line = document.createElement('hr');
                innerItem.appendChild(textElement);
                innerItem.appendChild(buttonStatus);
                bookItem.appendChild(innerItem);
                bookItem.appendChild(line);
                containerBooks?.appendChild(bookItem);


                // збереження HTML елементів у localStorage
                Storage.saveElementState('book_items', containerBooks?.innerHTML || '');

                this.blockModal();
            }
            
            
        }    
        );
    }

    blockUsers(): void {
        let userIdCounter = parseInt(localStorage.getItem('lastUserId') || '0') + 1;
    
        const resetUserCounter = () => {
            localStorage.removeItem('lastUserId');
            userIdCounter = 1;
        };
    
        document.querySelector('.btn_clear_users')?.addEventListener('click', () => {
            this.libraryService.clearUsers();
            const containerUsers = document.querySelector('.user_items');
            if (containerUsers) {
                containerUsers.innerHTML = '';  
            }
            Storage.clearData('user_items');
            resetUserCounter();
        });
    
        document.querySelector('.input_add_user')?.addEventListener('click', (event) => {
            event.preventDefault(); 
            const containerUsers = document.querySelector('.user_items');
            const nameUser = (document.querySelector('.input_username') as HTMLInputElement)?.value;
            const emailUser = (document.querySelector('.input_email') as HTMLInputElement)?.value;
            
            if(ValidationUser()){
                //перевіряєм чи контейнер пустий
                if (!containerUsers?.innerHTML.trim()) {
                    resetUserCounter();
                }
    
                const idUser = userIdCounter++;
                const user = new User(idUser, nameUser, emailUser);
                this.libraryService.addUser(user);
               
                const userItem = document.createElement('div');
                const innerUser = document.createElement('div');
                innerUser.classList.add('d-flex', 'justify-content-between');
                const textElement = document.createElement('span');
                textElement.textContent = user.printInfo();
                textElement.classList.add('fs-5');
                const line = document.createElement('hr');
                innerUser.appendChild(textElement);
                userItem.appendChild(innerUser);
                userItem.appendChild(line);
                containerUsers?.appendChild(userItem);
    
                // Сохраняем HTML элементы и последний использованный ID в localStorage
                Storage.saveElementState('user_items', containerUsers?.innerHTML || '');
                localStorage.setItem('lastUserId', idUser.toString());
            }
        });
    }

    blockModal(): void {
        const buttonsBorrow = document.querySelectorAll('.btnBorrowOff');
        let activeBookButton: HTMLElement | null = null;  
    
        buttonsBorrow.forEach(button => {
           
            Modal.showBorrowModal(button as HTMLElement);
    
           
            button.addEventListener('click', () => {
                activeBookButton = button as HTMLElement;  
                const bookFullText = button.closest('div')?.querySelector('span')?.textContent?.trim() || ''; 
                const [bookName] = bookFullText.split(' by ');
                activeBookButton.setAttribute('data-book', bookName);  
    
            });
        });
    

        const btnSave = document.getElementById('btn_save') as HTMLElement;
        const inputIdUser = document.getElementById('input_borrow') as HTMLInputElement;
    
        btnSave.addEventListener('click', () => {
            if (!activeBookButton) {
                console.error('Немає активної кнопки позичення.');
                return;
            }
    
            const userId = inputIdUser.value.trim();  
            const bookName = activeBookButton.getAttribute('data-book');  
        
            if (userId && bookName) {
                const isBorrowed = this.libraryService.borrowBook(bookName, parseInt(userId));
                if (isBorrowed) {
                    activeBookButton.textContent = 'Повернути';
                    activeBookButton.classList.replace('btn-primary', 'btn-warning');
                    
                    Modal.hideBorrowModal();
                }
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    new App();
});

