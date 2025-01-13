const myLibraly = [];

function Book(name, author, pages, read){
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBookToLibraly(name, author, pages, read){
    const book = new Book(name, author, pages, read);
    myLibraly.push(book);
}

let info = addBookToLibraly('tee', 'yeah', 78, true);

function loop (){
    return myLibraly[0].name;
}
console.log(loop());



