export interface IBook {
    printInfo():string;
}

export class Book implements IBook {

   nameBook:string;
   authorBook:string;
   releaseYearBook:number;

    constructor (nameBook:string,authorBook:string,releaseYearBook:number ){
    this.nameBook = nameBook;
    this.authorBook = authorBook;
    this.releaseYearBook = releaseYearBook;
   }

   printInfo(): string {
       return `${this.nameBook} by ${this.authorBook} (${this.releaseYearBook})`;
   }

}

export interface IUser {
    printInfo():string;
}

export class User implements IUser {

    idUser:number;
    nameUser:string;
    emailUser:string;
    borrowedBooksCount: number = 0;

    constructor (idUser:number, nameUser:string, emailUser:string){
        this.idUser = idUser;
        this.nameUser = nameUser;
        this.emailUser = emailUser;
    }

    printInfo(): string {
        return `ID: ${this.idUser},  ${this.nameUser} ${this.emailUser}  Позичено книг - ${this.borrowedBooksCount}`;
    }
}
