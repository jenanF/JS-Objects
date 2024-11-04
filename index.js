// TASK 1
let book = {
    "Title": "JavaScript: The Definitive Guide",
    "Author": "David Flanagan",
    "PublishedYear": 2020,
    "Genre": "Programming"
}

// TASK 2
console.log(book.Title);
console.log(book["PublishedYear"]);

// TASK 3
book.pageCount = 1096;

// TASK 4
book.ISBN = "978-1491952023";

// TASK 5
book.PublishedYear = 2021;

// TASK 6
book.Author = ["David Flanagan", "Another Author"];

// TASK 7
class review {
    constructor(reviewer, comment) {

        this.reviewer = reviewer;
        this.comment = comment;
    }
}

book.reviews = [new review("Book Critic", "A comprehensive guide to JavaScript"), new review("Amazing", "great for beginners"),];
//console.log(book.reviews[0]);


console.log(book);