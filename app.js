const greeting = document.querySelector('#greeting');
const addBtn = document.querySelector('#add-btn');
const submitBtn = document.querySelector("#submit-button")
const closeBtn = document.querySelector('#close-button');
const dialog = document.querySelector('#form-dialog');
const bookForm = document.querySelector('#book-form');
const nameDialog = document.querySelector('#name-dialog');
const nameForm = document.querySelector('#name-form');
const userName = document.querySelector('#name');
const booksContainer = document.querySelector('#books-container');

const myLibrary = [];

function Book(title, author, pages, status) {
    this.ID = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.color = `rgb(${numberGen()}, ${numberGen()}, ${numberGen()})`;
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
    booksContainer.innerHTML = '';   //to be uncommented before finalizing
    for (i = 0; i < myLibrary.length; i++) {
        const card = document.createElement('div')
        card.classList.add('card');

        const cover = document.createElement('div');
        cover.classList.add('cover')
        cover.style.backgroundColor = myLibrary[i].color;

        const bookStatus = document.createElement('p');
        bookStatus.classList.add('book-status');
        if (myLibrary[i].status === true) {
            bookStatus.textContent = 'Read';
        } else {
            bookStatus.textContent = 'Not Read';
        }
        
        const bookPages = document.createElement('p');
        bookPages.classList.add('book-pages');
        bookPages.textContent = myLibrary[i].pages;

        const cardContent = document.createElement('div');
        cardContent.classList.add('card-content');

        const bookTitle = document.createElement('h2');
        bookTitle.classList.add('book-title');
        bookTitle.textContent = myLibrary[i].title;

        const bookAuthor = document.createElement('h3');
        bookAuthor.classList.add('book-author');
        bookAuthor.textContent = myLibrary[i].author;

        card.appendChild(cover);
        card.appendChild(cardContent);
        cover.appendChild(bookStatus);
        cover.appendChild(bookPages)
        cardContent.appendChild(bookTitle)
        cardContent.appendChild(bookAuthor)
        booksContainer.appendChild(card);
    }
}

function numberGen() {
    let randomNo = Math.floor(Math.random() * 255);

    if (randomNo < 140) {
        return 255;
    } else {
        return randomNo;
    }
}

nameDialog.showModal();
nameForm.addEventListener('keypress', () => {
    if (event.key === 'Enter') {
        event.preventDefault();
        const finalName = userName.value.charAt(0).toUpperCase() + userName.value.slice(1);
        greeting.textContent = `Goodmorning, ${finalName}!`;
        nameDialog.close();
    }
})

greeting.addEventListener('click', () => {
    nameDialog.showModal();
})

addBtn.addEventListener('click', () => {
    dialog.showModal();
});

submitBtn.addEventListener('click', () => {
    event.preventDefault();
    addBookToLibrary();
    displayBook();
    dialog.close();
    bookForm.reset();
});

closeBtn.addEventListener('click',() => {
    dialog.close();
});