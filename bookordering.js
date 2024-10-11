// Book Library

// Book Data:Store each book’s information (title, author, availability) in an array of objects.
// Each object should contain title (a string), author (a string), and isAvailable
//  (a boolean indicating if the book is available).
let books = [
    {
        title: 'Gifted Hands',
        author: 'Dr Ben Carson',
        isAvailable: true,
    },
    {
        title: 'Why you act the way you do',
        author: 'Dr tyler',
        isAvailable: false,
    },
    {
        title: 'I believe in vision',
        author: 'Dr Kenneth E Hagin',
        isAvailable: true,
    },
    {
        title: 'Earths Final Moments',
        author: 'Dr Haggin',
        isAvailable: true,
    },
    {
        title: 'Eyes of th gods',
        author: 'Dr Ben Nwokocha',
        isAvailable: false,
    },
    {
        title: 'Richest Man In Babylon',
        author: 'George S. Clason',
        isAvailable: false,
    },
    {
        title: 'Custom Made Demon King',
        author: 'Dark Old Demon',
        isAvailable: true,
    },
    {
        title: 'god of the dead',
        author: 'Dr calin shwezler',
        isAvailable: false,
    },
    {
        title: 'Where is my eye',
        author: 'Dr Sunless',
        isAvailable: true,
    },
    {
        title: 'Hail Weaver',
        author: 'Dr Lost From Light',
        isAvailable: true,
    },
    {
        title: 'Shadow Slave',
        author: 'Guilty Three',
        isAvailable: false,
    },
    {
        title: 'The Last Hope',
        author: 'Dr. John Doe',
        isAvailable: true,
    }
]

// Functionalities to Implement:
// Add a book:
// Create a function addBook that takes the title and author as input and adds the book to the array.
//  The isAvailable status should be set to true initially

function addBook(title, author){
    let book = {
        title: title,
        author: author,
        isAvailable: true
    };
    books.push(book);
    return books;
}


console.log(addBook('The Wonderful Wizard of Oz', 'Frank Baum'));

// Search for a book:
// Create a function searchBook that takes the title of the book as input, converts the input to lowercase, 
// and checks if the book exists in the array (ignore case sensitivity). If the book exists, 
// display its title, author, and availability status. If not, display a message saying the book is not found.

function searchBook(title){
    let lowerCaseTitle = title.toLowerCase();
    for (let i = 0; i < books.length; i++){
        if (books[i].title.toLowerCase() === lowerCaseTitle){
            console.log(`Title: ${books[i].title}`)
            console.log(`Author: ${books[i].author}`)
            console.log(`Availability: ${books[i].isAvailable}`)
            return;
            }else{
                console.log('\nBook not found\n');
                break;
            }

    };
}

searchBook('Gifted Hands');
searchBook('love men');


// Borrow a book:
// Create a function borrowBook that takes the title of a book as input.
//  If the book is available (isAvailable: true), change its status to false and display
//  a message that the book has been borrowed. If it’s already borrowed, display a message
//  that the book is not available.

function borrowBook(title){
    let lowerCaseTitle = title.toLowerCase();
    for (let i = 0; i < books.length; i++){
        if (books[i].title.toLowerCase() === lowerCaseTitle && books[i].isAvailable ===
        true){
            books[i].isAvailable = false;
            console.log(`Book "${title}" has been borrowed \n`);
            return;
            }else{
                console.log(`Book "${title}" is not available\n`)
                    break;
                    }
                }
};

borrowBook('Gifted Hands');
borrowBook('shadow slave');

// Display available books:
// Create a function listAvailableBooks that lists all books that are available to borrow
//  (i.e., isAvailable: true).

function listAvailableBooks() {
    for (let i = 0; i < books.length; i++) {
        if (books[i].isAvailable === true) {
            console.log(`Title: ${books[i].title}`)
                console.log(`Author: ${books[i].author}`)
                console.log(`Availability: ${books[i].isAvailable}`)
                console.log('------------------------')
                }
                }
}

listAvailableBooks()

