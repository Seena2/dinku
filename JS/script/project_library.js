//Project: Library
//Array to store book objects
let myLibrary=["Lord of the Ring","Dude","cars"];


//Funcion that take user inbut(book object) and store new book object to array
function addBookToLibrary(){
    
}


function Book(){
    //constructor
}

//function that loop through the array and displays each book on the page
function displayBooks(){
    for(let book in myLibrary){
        let bookItem= document.querySelector('#book-item1');
        bookItem.textContent=book;
    }
}

//Book Constructor
function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.info=function(){
        const report=`The ${Book} by ${author}, ${pages} pages,${read}`;
        return report;
    }
}
Book.prototype.editor= function(name){
    const editer=name;
    return editer;
}
const myBook= new Book('hello','Calla',123,'No');
console.log(myBook.constructor);
console.log(myBook.editor('Kebede'));




