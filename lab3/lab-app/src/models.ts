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

    idUrser:number;
    nameUser:string;
    emailUser:string;

    constructor (idUrser:number, nameUser:string, emailUser:string){
        this.idUrser = idUrser;
        this.nameUser = nameUser;
        this.emailUser = emailUser;
    }

    printInfo(): string {
        return `ID: ${this.idUrser},  ${this.nameUser} ${this.emailUser}`;
    }
}
