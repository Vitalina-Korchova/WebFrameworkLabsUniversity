// import all modules here
import {Book, User} from './models';
import {LibraryService} from './services';
import { Storage } from './storage';
// etc.

class App {

    private libraryService: LibraryService;
    
    constructor (){
        this.libraryService = new LibraryService();
        console.log (this.libraryService.getAllBooks());
        this.loadDataFromLocalStorage();
        this.blockBooks();
    }

    loadDataFromLocalStorage():void{
        // Завантаження збережених елементів з localStorage
        const savedBooksHTML = Storage.loadElementState('book_items');
        const containerBooks = document.querySelector('.book_items');
        if (containerBooks && savedBooksHTML) {
            containerBooks.innerHTML = savedBooksHTML;
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

        document.querySelector('.input_add_book')?.addEventListener('click', ()=>{
            //console.log('Add book button clicked');
            const containerBooks = document.querySelector('.book_items');
            const nameBook = (document.querySelector('.input_name_book') as HTMLInputElement)?.value;    //перевторення на строки
            const authorBook = (document.querySelector('.input_author_book') as HTMLInputElement)?.value;
            const releaseYear = (document.querySelector('.input_release_year') as HTMLInputElement)?.value;


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
            const line = document.createElement('hr');
            innerItem.appendChild(textElement);
            innerItem.appendChild(buttonStatus);
            bookItem.appendChild(innerItem);
            bookItem.appendChild(line);
            containerBooks?.appendChild(bookItem);


             // збереження HTML елементів у localStorage
             Storage.saveElementState('book_items', containerBooks?.innerHTML || '');
            }    
        );
    }

    blockUsers():void{
        document.querySelector('.btn_clear_users')?.addEventListener('click', ()=>{
            this.libraryService.clearUsers();
            const containerUsers = document.querySelector('.user_items');
            if (containerUsers) {
                containerUsers.innerHTML = '';  
            }

             Storage.clearData('user_items');
        });

        
    }


}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    new App();
});

