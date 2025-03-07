
const addBtn = document.querySelector('#add-btn');
const bookForm = document.querySelector('#book-form');

const myLibrary = [];

function Book(title, author, pages, status) {
    this.ID = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.getinfo = function() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Status: ${this.status}`);
    }
}

function addBookToLibrary() {
    const title = document.querySelector('#book-title').value;
    const author = document.querySelector('#book-author').value;
    const pages = document.querySelector('#book-pages').value;
    const status = document.querySelector('#book-status').value;
    const newBook = new Book(title, author, pages, status);
    newBook.getinfo();
    myLibrary.push(newBook);
}

addBtn.addEventListener('click', () => {
    bookForm.style.display = 'block';
    addBookToLibrary();
    console.table(myLibrary);
})