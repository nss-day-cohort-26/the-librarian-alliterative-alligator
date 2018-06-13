const book = Object.create({}, {
    title: {
        value: "",
        writable: true,
        enumerable: true,
    },
    author: {
        value: "",
        writable: true,
        enumerable: true
    },
    genre: { 
        value: "",
        enumerable: true,
        writable: true
    },
    isbnNumber: {
        value: "",
        writable: true,
        enumerable: true
    },
    checkedOut: {
        value: false,
        enumerable: true,
        writable: true
    },
    dateDue: {
        value: "",
        enumerable: true,
        writable: true
    }
})
let library = []
const createBook = (bookTitle, bookAuthor, bookGenre, bookIsbnNumber) => {
    let newBook = Object.create(book, {
        title: {
            value: bookTitle
        },
        author: {
            value: bookAuthor
        },
        genre: {
            value: bookGenre
        },
        isbnNumber: {
            value: bookIsbnNumber
        },
        bookDateDue: {
            value: "07/24/2018"
        },
        checkedOut: {
            value: false
        }
    })    
    library.push(newBook);
}
createBook("Testing Testing: The Art of Testing", "Test Tester", "Experimental-Non-Fiction", "23487");
createBook("Harry Potter", "JK Rowling", "Fiction", "12345");
createBook("The Last Book You Will Ever Need", "John Man", "Librarian Fiction", "29494");
createBook("Coding Until My Brain Explodes", "The Aligator Team", "Inspirational Non-Fiction", "09876");
createBook("Why Does No One Like Me", "Nicholas Cage", "Biography", "16979");




console.log(library);

