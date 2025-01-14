const myLibraly = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


function addBookToLibraly(title, author, pages, read){
    const book = new Book(title, author, pages, read);
    myLibraly.push(book);
    displayBook();
}

const books = document.querySelector('.book-list')

function displayBook(){
    myLibraly.forEach((element) => {
        const bookList = document.createElement('div');
        bookList.setAttribute('class', 'book-div')
        const title = document.createElement('span');
        title.textContent = element.title;
        bookList.appendChild(title)

        const author = document.createElement('span');
        author.textContent = element.author;
        bookList.appendChild(author)

        const pages = document.createElement('span');
        pages.textContent = element.pages;
        bookList.appendChild(pages)

        const read = document.createElement('span');
        read.textContent = element.read;
        bookList.appendChild(read);

        books.appendChild(bookList);
    });
   
}

const form = document.querySelector('.form');
form.addEventListener('submit', event =>{
    event.preventDefault();
    const title = document.querySelector('#title').value;
    const author =  document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read =  document.querySelector('#read').value;
    addBookToLibraly(title, author, pages, read);
})




