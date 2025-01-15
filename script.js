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
const formContainer = document.querySelector('.side-bar')
form.addEventListener('submit', event =>{
    event.preventDefault();
    formEvent();
})

const header = document.querySelector('.header');

 function addButton(){
    const addButton = document.createElement('button');
    addButton.setAttribute('type', 'button');
    addButton.classList.add('add-button');
    addButton.textContent = 'Add a new book';
    header.appendChild(addButton);

    addButton.addEventListener('click', () =>{
     displayForm();
     addButton.remove();
    })
 }

 const container = document.querySelector('.container');


 function displayForm(){
    const sideBar = document.createElement('div')
    sideBar.classList.add('side-bar');
    header.appendChild(sideBar)
    const form = document.createElement('form');
    form.classList.add('form');
    sideBar.appendChild(form);

    const div = document.createElement('div');
    const label = document.createElement('label');
    label.setAttribute('for', 'title');
    label.textContent = 'Title'
    const title = document.createElement('input')
    title.setAttribute('id', 'title');
    title.setAttribute('type', 'text');
    title.setAttribute('name', 'title');
    div.appendChild(label);
    div.appendChild(title);
    form.appendChild(div);

    const div2 = document.createElement('div');
    const label2 = document.createElement('label');
    label2.setAttribute('for', 'author');
    label2.textContent = 'Author'
    const author = document.createElement('input')
    author.setAttribute('id', 'author');
    author.setAttribute('type', 'text');
    author.setAttribute('name', 'author');
    div2.appendChild(label2);
    div2.appendChild(author);
    form.appendChild(div2);

    const div3 = document.createElement('div');
    const label3 = document.createElement('label');
    label3.setAttribute('for', 'pages');
    label3.textContent = 'Pages'
    const pages = document.createElement('input')
    pages.setAttribute('id', 'pages');
    pages.setAttribute('type', 'number');
    pages.setAttribute('name', 'pages');
    div3.appendChild(label3);
    div3.appendChild(pages);
    form.appendChild(div3);

    const div4 = document.createElement('div');
    const label4 = document.createElement('label');
    label4.setAttribute('for', 'read');
    label4.textContent = 'Read'
    const read = document.createElement('input')
    read.setAttribute('id', 'read');
    read.setAttribute('type', 'checkbox');
    read.setAttribute('name', 'read');
    div4.appendChild(label4);
    div4.appendChild(read);
    form.appendChild(div4);


    const submit = document.createElement('button')
    submit.textContent = 'Submit Book'
    submit.classList.add('submit-button');
    submit.setAttribute('type', 'submit');
    submit.setAttribute('name', 'submit');
    form.appendChild(submit);

    submit.addEventListener('click', event => {
        event.preventDefault();
        formEvent();
        sideBar.remove();
    })
 }


 function formEvent(){
    const title = document.querySelector('#title').value;
    const author =  document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const readCheckbox = document.getElementById('read');
    const isRead = readCheckbox.checked;
    addBookToLibraly(title, author, pages, isRead);
    addButton();
    formContainer.remove();
 }
 






