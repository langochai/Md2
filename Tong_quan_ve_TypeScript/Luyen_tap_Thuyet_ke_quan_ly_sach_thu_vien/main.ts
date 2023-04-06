import {Book} from "./Book";

let book1 = new Book('The Design of EveryDay Things','Don Norman', false);
let book2 = new Book('The Most Human Human','Brian Christian', true);
let books: Book[] = [];
books.push(book1, book2);
for (let i = 0; i < books.length; i++) {
    let book = books[i];
    let bookInfo = book.title + '" by ' + book.author;
    if (book.alreadyRead) {
        console.log('You already read "' + bookInfo);
    } else {
        console.log('You still need to read "' + bookInfo);
    }
}