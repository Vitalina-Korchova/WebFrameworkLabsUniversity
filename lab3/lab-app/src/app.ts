// import all modules here
import {Book, User} from './models';
import {LibraryService} from './services';

// etc.

class App {

    private libraryService: LibraryService;
    
    constructor (){
        this.libraryService = new LibraryService();
        console.log (this.libraryService.getAllBooks());
        this.main();
    }

    main():void{
        document.querySelector('.input_add_book')?.addEventListener('click', ()=>{
            //console.log('Add book button clicked');
            const containerBooks = document.querySelector('.book_items');
            const nameBook = (document.querySelector('.input_name_book') as HTMLInputElement)?.value;    //перевторення на строки
            const authorBook = (document.querySelector('.input_author_book') as HTMLInputElement)?.value;
            const releaseYear = (document.querySelector('.input_release_year') as HTMLInputElement)?.value;


            const book = new Book(nameBook,authorBook, parseInt(releaseYear) );
            this.libraryService.addBook(book);
            //console.log('Books in library:', this.libraryService.clearBooks());  //очистити

            //створення елемента
            const bookItem = document.createElement('div');
            const innerItem = document.createElement('div');
            innerItem.classList.add('d-flex', 'justify-content-between');
            const textElement = document.createElement('span');
            textElement.textContent = book.printInfo();        //функція виведення інфи
            const buttonStatus = document.createElement('button');
            buttonStatus.textContent = "Позичити";
            const line = document.createElement('hr');
            innerItem.appendChild(textElement);
            innerItem.appendChild(buttonStatus);
            bookItem.appendChild(innerItem);
            bookItem.appendChild(line);
            containerBooks?.appendChild(bookItem);

            }
        );
    }


}

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    new App();
});
