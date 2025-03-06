
const addBtn = document.querySelector('#add-btn');
const bookTitle = document.querySelector('#bookTitle');

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
    const title = prompt('Enter title: ');
    const author = prompt('Enter author: ');
    const pages = parseInt(prompt('Enter pages: '));
    const status = prompt('Enter status: ');
    const newBook = new Book(title, author, pages, status);
    newBook.getinfo();
    myLibrary.push(newBook);
}

addBtn.addEventListener('click', () => {
  addBookToLibrary();
  console.table(myLibrary);
})

