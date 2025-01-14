const myLibraly = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this. read = read;
}

function addBookToLibraly(title, author, pages, read){
    const newBook = new Book(title, author, pages, read);
    myLibraly.push(newBook);
    displayBook();
}

function displayBook(){
    myLibraly.forEach((book) => {
        console.log(book.title);
    })
}
addBookToLibraly('yewo', 'week', 78, true);