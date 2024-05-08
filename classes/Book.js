// import the Media class:
const Media = require('./Media')
// create your Book class:
class Book extends Media {
    constructor(title, year, genre, author, numPages, rating) {
        super(title, year, genre);
        this.author = author;
        this.numPages = numPages;
        this.rating = rating;
    }
    summary() {
           return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`
    }
    
    static highestRating(arr) {
        let index = 0;
        let highest = arr[0].rating;
        for(let i = 1; i < arr.length; i++) {
            if(arr[i].rating > highest) {
                index = i;
                highest = arr[i].rating;
            }
        }
        return arr[index];
    }
}
// don't change below
module.exports = Book;
