// import the Media class:
const Media = require('./Media')
// create your Movie class:
class Movie extends Media{
    constructor(title, year, genre, director, duration, rating) {
        super(title, year, genre);
        this.director = director;
        this.duration = duration;
        this.rating = rating;
    }

    summary() {
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`
    }

    static longestMovie(arr) {
        let index = 0;
        let highest = arr[0].rating;
        
        for(let i = 1; i < arr.length; i++) {
            if(arr[i].rating > highest) {
                console.log()
                index = i;
                highest = arr[i].rating;
            }  
        }
        return arr[index];
    }
}
// don't change below
module.exports = Movie;