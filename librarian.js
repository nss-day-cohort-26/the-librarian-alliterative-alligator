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
        value: function (title) {
            
            library.forEach(item => {
                if(item.title === title){
                    if(item.checkedOut === false){
                        console.log("This book exists");
                    }
                } else {
                    console.log("this didn't work why you so stupid");
                }
            })
        }
    }
    
})
librarian.checkout("Testing Testing: The Art of Testing");
librarian.createCustomer('Historical Fiction',  'Leah', 'Gwin', '500 Interstate Blvd', 1);
librarian.createCustomer('Non-Fiction', 'Natasha', 'Cox', '500 Interstate Blvd', 2);
librarian.createCustomer("Fantasy", "Jacob", "Henderson", "500 Interstate Blvd", 3);
librarian.createCustomer("Religious Fiction", "Austin", "Gorman", "500 Interstate Blvd", 4);
console.log(customers);
