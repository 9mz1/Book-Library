
const addBtn = document.querySelector('#add-btn');
const submitBtn = document.querySelector("#submit-button")
const bookForm = document.querySelector('#book-form');
const booksContainer = document.querySelector('#books-container');

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
    const status = document.querySelector('#book-status').checked;
    const newBook = new Book(title, author, pages, status);
    newBook.getinfo();
    myLibrary.push(newBook);
    console.clear();
    console.table(myLibrary);
}

function displayBook() {
    // booksContainer.innerHTML = '';   
    for (i = 0; i < myLibrary.length; i++) {
        const card = document.createElement('div')
        card.classList.add('card');

        const bookTitle = document.createElement('h2');
        bookTitle.classList.add('book-title');
        bookTitle.textContent = myLibrary[i].title;

        const bookAuthor = document.createElement('h3');
        bookAuthor.classList.add('book-author');
        bookAuthor.textContent = myLibrary[i].author;

        const bookPages = document.createElement('p');
        bookPages.classList.add('book-pages');
        bookPages.textContent = myLibrary[i].pages;

        const bookStatus = document.createElement('p')
        bookStatus.classList.add('book-status');
        if (myLibrary[i].status === true) {
            bookStatus.textContent = 'read';
        } else {
            bookStatus.textContent = 'not read';
        }

        card.appendChild(bookTitle);
        card.appendChild(bookAuthor);
        card.appendChild(bookPages);
        card.appendChild(bookStatus)
        booksContainer.appendChild(card);
    }
}

addBtn.addEventListener('click', () => {
    bookForm.style.display = 'block';
});

submitBtn.addEventListener('click', () => {
    event.preventDefault();
    addBookToLibrary();
    displayBook();
    bookForm.style.display = 'none';
    bookForm.reset();
});