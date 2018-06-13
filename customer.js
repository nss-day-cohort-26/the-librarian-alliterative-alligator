// Each of you must define yourselves as an actor in this system.The following properties and methods must be defined.

// Favorite genre(s)
// An empty bookshelf
// First name
// Last name
// Address
// Library card number(blank to start)
// Checkout a book.If it's available, add it to your bookshelf.
// Return a book.It should be removed from your bookshelf.

let customer = Object.create({}, {
    favGenre: {  
      value: "",
      writable: true,
      enumerable: true
    },
    bookshelf: {
      value: [],
      writable: true,
      enumerable: true
    },
    firstName: {
      value: "",
      writable: true,
      enumerable: true
    },
    lastName: {
      value: "",
      writable: true,
      enumerable: true
    },
    address: {
      value: "",
      writable: true,
      enumerable: true
    },
    cardNumber: {
      value: 0,
      writable: true,
      enumerable: true
    }
})

let customers = [];


    







