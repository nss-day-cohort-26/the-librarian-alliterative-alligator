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
        value: "07/24/2018",
        enumerable: true,
        writable: true
    }
})
let library = []
const createBook = (bookTitle, bookAuthor, bookGenre, bookIsbnNumber) => {
    let newBook = Object.create(book)
    newBook.title = bookTitle;
    newBook.author = bookAuthor;
    newBook.genre = bookGenre;
    newBook.isbnNumber = bookIsbnNumber;   
    console.log("THIS IS ALL NEW BOOKS", newBook);
    
    library.push(newBook);
}
createBook("Testing Testing: The Art of Testing", "Test Tester", "Experimental-Non-Fiction", "23487");
createBook("Harry Potter", "JK Rowling", "Fiction", "12345");
createBook("The Last Book You Will Ever Need", "John Man", "Librarian Fiction", "29494");
createBook("Coding Until My Brain Explodes", "The Aligator Team", "Inspirational", "09876");
createBook("How to Pronounce Reeses Pieces", "ET The Alien", "Non-Fiction", "33979");
createBook("Don't Be Electrocuted By The Whiteboard: a Memoir", "Austin Gorman", "Biography", "22229");
createBook("Writing Left Handed When You Should Be Right Handed", "Jacob Henderson", "Inspirational", "24242");
createBook("Giphy for Dummies 101", "Natasha Cox", "Instructional", "57840");
createBook("My Strange Addiction: 'Spicy Water'", "Leah Gwin", "Inspirational", "27930");
createBook("I'm a Librarian", "Mr. or Ms. Librarian", "Librarian Fiction", "83930");
createBook("Weird Genres", "The Aligator Team", "Experimental-Non-Fiction", "08370");
createBook("If If If If If If If If If If If If If If If If If", "Non-Fiction", "93893");




console.log("THIS IS ENTIRE LIBRARY OBJECT", library);

