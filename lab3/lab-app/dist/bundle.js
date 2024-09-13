(()=>{"use strict";var e={419:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Library=void 0,t.Library=class{constructor(){this.items=[]}addItem(e){this.items.push(e)}getAllItems(){return this.items}findItem(e){return this.items.find(e)}removeItem(e){this.items=this.items.filter((t=>!e(t)))}clear(){this.items.length=0}}},524:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.User=t.Book=void 0,t.Book=class{constructor(e,t,r){this.nameBook=e,this.authorBook=t,this.releaseYearBook=r}printInfo(){return`${this.nameBook} by ${this.authorBook} (${this.releaseYearBook})`}},t.User=class{constructor(e,t,r){this.idUrser=e,this.nameUser=t,this.emailUser=r}printInfo(){return`ID: ${this.idUrser},  ${this.nameUser} ${this.emailUser}`}}},154:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.LibraryService=void 0;const o=r(524),a=r(419),s=r(421);t.LibraryService=class{constructor(){this.booksLibrary=new a.Library,this.userLibrary=new a.Library,this.borrowStatus={},this.loadData()}addBook(e){this.booksLibrary.addItem(e),this.saveData()}addUser(e){this.userLibrary.addItem(e),this.saveData()}getAllBooks(){return this.booksLibrary.getAllItems()}getAllUsers(){return this.userLibrary.getAllItems()}findBook(e){return this.booksLibrary.findItem(e)}findUser(e){return this.userLibrary.findItem(e)}borrowBook(e,t){if(this.borrowStatus[e])return!1;const r=this.findBook((t=>t.printInfo().includes(e))),o=this.findUser((e=>e.printInfo().startsWith(t.toString())));return!(!r||!o||(this.borrowStatus[e]=t,this.saveData(),0))}returnBook(e){return!!this.borrowStatus[e]&&(delete this.borrowStatus[e],this.saveData(),!0)}getBorrowedBooks(){return Object.entries(this.borrowStatus).map((([e,t])=>({bookName:e,userId:t})))}saveData(){s.Storage.saveData("books",this.booksLibrary.getAllItems()),s.Storage.saveData("users",this.userLibrary.getAllItems()),s.Storage.saveData("borrowStatus",this.borrowStatus)}loadData(){const e=s.Storage.loadData("books"),t=s.Storage.loadData("users"),r=s.Storage.loadData("borrowStatus");e.forEach((e=>this.booksLibrary.addItem(new o.Book(e.nameBook,e.authorBook,e.releaseYearBook)))),t.forEach((e=>this.userLibrary.addItem(new o.User(e.idUrser,e.nameUser,e.emailUser)))),this.borrowStatus=r}clearBooks(){this.booksLibrary.clear(),this.saveData(),s.Storage.clearData("book_items")}clearUsers(){this.userLibrary.clear(),this.saveData(),s.Storage.clearData("user_items")}}},421:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Storage=void 0,t.Storage=class{static saveData(e,t){localStorage.setItem(e,JSON.stringify(t))}static loadData(e){return JSON.parse(localStorage.getItem(e)||"[]")}static clearData(e){localStorage.removeItem(e)}static saveElementState(e,t){localStorage.setItem(e,t)}static loadElementState(e){return localStorage.getItem(e)||""}}},529:(e,t)=>{function r(e,t){const r=e.value.trim(),o=(new Date).getFullYear(),a=parseInt(r);let s=!0;return""===r?(t.textContent="Введіть рік видання!",e.setCustomValidity("invalid"),s=!1):!/^\d{4}$/.test(r)||isNaN(a)||a<1||a>o?(t.textContent=`Введіть коректний рік видання (від 1 до ${o})`,e.setCustomValidity("invalid"),s=!1):(e.classList.add("was-validated"),t.textContent="",e.setCustomValidity("")),s}Object.defineProperty(t,"__esModule",{value:!0}),t.ValidationBook=function(){const e=document.querySelectorAll(".needs-validation-book");let t=!0;return e.forEach((function(e){if(e instanceof HTMLFormElement){e.checkValidity()||(t=!1);const o=e.querySelector(".input_release_year"),a=e.querySelector(".input_release_year + .invalid-feedback");o&&a&&(o.addEventListener("input",(function(){r(o,a)})),r(o,a)||(t=!1)),e.classList.add("was-validated"),t&&(e.reset(),e.classList.remove("was-validated"))}})),t},t.ValidationUser=function(){const e=document.querySelectorAll(".needs-validation-user");let t=!0;return e.forEach((function(e){if(e instanceof HTMLFormElement){e.checkValidity()||(t=!1);const r=e.querySelector(".input_email"),o=e.querySelector(".input_email + .invalid-feedback"),a=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;r&&o&&r.addEventListener("input",(function(){a.test(r.value.trim())?(r.classList.add("was-validated"),o.textContent="",r.setCustomValidity("")):(o.textContent="Введіть правильний email!",r.setCustomValidity("invalid"),t=!1)})),e.classList.add("was-validated"),t&&(e.reset(),e.classList.remove("was-validated"))}})),t}}},t={};function r(o){var a=t[o];if(void 0!==a)return a.exports;var s=t[o]={exports:{}};return e[o](s,s.exports,r),s.exports}(()=>{const e=r(524),t=r(154),o=r(421),a=r(529);class s{constructor(){this.libraryService=new t.LibraryService,console.log(this.libraryService.getAllBooks()),console.log(this.libraryService.getAllUsers()),this.loadDataFromLocalStorage(),this.blockBooks(),this.blockUsers()}loadDataFromLocalStorage(){const e=o.Storage.loadElementState("book_items"),t=document.querySelector(".book_items");t&&e&&(t.innerHTML=e);const r=o.Storage.loadElementState("user_items"),a=document.querySelector(".user_items");a&&r&&(a.innerHTML=r)}blockBooks(){var t,r;null===(t=document.querySelector(".btn_clear_books"))||void 0===t||t.addEventListener("click",(()=>{this.libraryService.clearBooks();const e=document.querySelector(".book_items");e&&(e.innerHTML=""),o.Storage.clearData("book_items")})),null===(r=document.querySelector(".input_add_book"))||void 0===r||r.addEventListener("click",(t=>{var r,s,i;t.preventDefault();const n=document.querySelector(".book_items"),l=null===(r=document.querySelector(".input_name_book"))||void 0===r?void 0:r.value,d=null===(s=document.querySelector(".input_author_book"))||void 0===s?void 0:s.value,c=null===(i=document.querySelector(".input_release_year"))||void 0===i?void 0:i.value;if((0,a.ValidationBook)()){const t=new e.Book(l,d,parseInt(c));this.libraryService.addBook(t);const r=document.createElement("div"),a=document.createElement("div");a.classList.add("d-flex","justify-content-between");const s=document.createElement("span");s.textContent=t.printInfo(),s.classList.add("fs-5");const i=document.createElement("button");i.textContent="Позичити",i.type="button",i.classList.add("btnBorrowOff","btn","btn-primary","btn-sm");const u=document.createElement("hr");a.appendChild(s),a.appendChild(i),r.appendChild(a),r.appendChild(u),null==n||n.appendChild(r),o.Storage.saveElementState("book_items",(null==n?void 0:n.innerHTML)||"")}}))}blockUsers(){var t,r;let s=1;null===(t=document.querySelector(".btn_clear_users"))||void 0===t||t.addEventListener("click",(()=>{this.libraryService.clearUsers();const e=document.querySelector(".user_items");e&&(e.innerHTML=""),o.Storage.clearData("user_items")})),null===(r=document.querySelector(".input_add_user"))||void 0===r||r.addEventListener("click",(t=>{var r,i;t.preventDefault();const n=document.querySelector(".user_items"),l=null===(r=document.querySelector(".input_username"))||void 0===r?void 0:r.value,d=null===(i=document.querySelector(".input_email"))||void 0===i?void 0:i.value;if((0,a.ValidationUser)()){const t=s++,r=new e.User(t,l,d);this.libraryService.addUser(r);const a=document.createElement("div"),i=document.createElement("div");i.classList.add("d-flex","justify-content-between");const c=document.createElement("span");c.textContent=r.printInfo(),c.classList.add("fs-5");const u=document.createElement("hr");i.appendChild(c),a.appendChild(i),a.appendChild(u),null==n||n.appendChild(a),o.Storage.saveElementState("user_items",(null==n?void 0:n.innerHTML)||"")}}))}}document.addEventListener("DOMContentLoaded",(()=>{console.log("DOM fully loaded and parsed"),new s}))})()})();