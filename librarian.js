// Define the Librarian actor in the system. The Librarian has the following responsiblities.

// Register a customer by providing a library card number
// Checkout a book requested by a customer.
// If the book is already checked out, don't give it to the customer.
// If the book is available, set its due date for one week in the future, and mark that it has been checked out.
// Check a book back in.
// If it is overdue, tell the customer that they owe $5.
// Mark the book as checked in.
// Reset its due date to its default value
// If a customer requests which books are in stock for a particular genre, provide a list of corresponding book titles.
let librarian = Object.create({}, {
    createCustomer: {
        value: function (customerGenre, customerFirstName, customerLastName, customerAddress, customerCard) {
            let newCustomer = Object.create(customer, {
                favGenre: {
                    value: customerGenre
                },
                bookshelf: {
                    value: []
                },
                firstName: {
                    value: customerFirstName
                },
                lastName: {
                    value: customerLastName
                },
                address: {
                    value: customerAddress
                },
                cardNumber: {
                    value: customerCard
                }
            })
            customers.push(newCustomer);
        }
    },
    checkout: {
        value: function (title, cardNumber) {
            //goes through our library and looks to see if the title exists in it
            library.forEach(item => {
                if (item.title === title) {
                    if (item.checkedOut === false) {
                        //this goes through customers
                        customers.forEach(currentCustomer => {
                            //we first find their library card number                             
                            if (currentCustomer.cardNumber === cardNumber) {
                                //then once we find their number, we push that selected book to their bookshelf


                                item.checkedOut = true;
                                currentCustomer.bookshelf.push(item)
                                console.log(`Thanks ${currentCustomer.firstName}. ${item.title} was added to your cart.`);

                            }
                        })
                    }
                    //if the book doesn't exist, this console log lets the customer know
                } else if (item.checkedOut === true) {
                    console.log("This book isn't here!!! Go buy it off Amazon.");
                }
            })
        }
    },
    return: {
        value: function (title, cardNumber) {
            //goes through our library and looks to see if the title exists or is checked out 
            library.forEach(item => {
                if (item.title === title) {
                    if (item.checkedOut === true) {
                        //this goes through customers 
                        customers.forEach(currentCustomer => {
                            //we first find their library card number                             
                            if (currentCustomer.cardNumber === cardNumber) {
                                //then once we find their number, we take back that selected book from their bookshelf
                                item.checkedOut = false;
                                currentCustomer.bookshelf.pop(item)
                                console.log(`Thanks ${currentCustomer.firstName}. ${item.title} was returned to our library, AND YOU WON'T BE CHARGED.`);
                            } else if(item.checkedOut === false){
                            console.log("This book isn't even checked out wyd");
                            }
                        })
                    }
                }
            })
        }
    },




})
        
        
librarian.createCustomer('Historical Fiction', 'Leah', 'Gwin', '500 Interstate Blvd', 1);
librarian.createCustomer('Non-Fiction', 'Natasha', 'Cox', '500 Interstate Blvd', 2);
librarian.createCustomer("Fantasy", "Jacob", "Henderson", "500 Interstate Blvd", 3);
librarian.createCustomer("Religious Fiction", "Austin", "Gorman", "500 Interstate Blvd", 4);
librarian.checkout("Testing Testing: The Art of Testing", 1);
// librarian.return("Testing Testing: The Art of Testing", 1);
console.log("THIS IS CUSTOMER", customers);
console.log("THIS IS LIBRARY", library);






const genreSearcher = (genre) => {
    library.forEach(book => {
        if (genre === book.genre) {
            let matchingBooks = []
            matchingBooks.push(book);
            matchingBooks.forEach(key => {
                console.log("!!!!",`Congratulations! We have the following books with the genre ${book.genre}: ${book[key].title}`)
                
            })
           
        }else if(genre !== book.genre) {
            console.log("I'm so sorry, but we don't have any books matching that genre :(.");           
        }
    })
}
genreSearcher("Librarian Fiction")
genreSearcher("Truth")