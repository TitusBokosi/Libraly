const myLibraly = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.toggleButton = function(){
        this.read = !this.read;
    }
}


function addBookToLibraly(title, author, pages, read){
    const book = new Book(title, author, pages, read);
    myLibraly.push(book);
    displayBook();
}

const books = document.querySelector('.book-list')

function displayBook(){
    const element = myLibraly[myLibraly.length -1];
        const bookList = document.createElement('div');
        bookList.setAttribute('class', 'book-div')
        const title = document.createElement('span');
        title.textContent = `Title: ${element.title}`;
        bookList.appendChild(title)

        const author = document.createElement('span');
        author.textContent = `Author:  ${element.author}`
        bookList.appendChild(author)

        const pages = document.createElement('span');
        pages.textContent = `Pages:  ${element.pages}`
        bookList.appendChild(pages)

        const readDiv = document.createElement('div')
        const read = document.createElement('span');
        read.textContent = `Read status:  ${element.read ? 'Read' : 'Not Read'}`
        readDiv.appendChild(read);
        const readButton = document.createElement('button');
        readButton.textContent = `${element.read ? 'Mark Not read' : 'Mark Read'}`
        readButton.classList.add('togle-button');
        readDiv.appendChild(readButton);
        readDiv.classList.add('read-div');
        bookList.appendChild(readDiv);

        const deleteBook = document.createElement('button');
        deleteBook.textContent = 'delete book'
        bookList.appendChild(deleteBook);
        deleteBook.setAttribute('type', 'button');
        deleteBook.classList.add('delete-book')

        books.appendChild(bookList);

        deleteBook.addEventListener('click', () => {
            deleteBook.parentElement.remove();
            const bookIndex = myLibraly.indexOf(element);
            myLibraly.splice(bookIndex, 1);
           
        })

        readButton.addEventListener('click', () =>{
            const bookIndex = myLibraly.indexOf(element);
            myLibraly[bookIndex].toggleButton();
            read.textContent = `Read status:  ${myLibraly[bookIndex].read ? 'Read' : 'Not Read'}`
            readButton.textContent = `${myLibraly[bookIndex].read ? 'Mark Not read' : 'Mark Read'}`       
        })
}

const form = document.querySelector('.form');
form.addEventListener('submit', event =>{
    event.preventDefault();
    const title = document.querySelector('#title').value;
    const author =  document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const readCheckbox = document.getElementById('read');
    const isRead = readCheckbox.checked;
    addBookToLibraly(title, author, pages, isRead);
})




