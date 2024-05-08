const { totalMediaCount } = require("./Media");

// create your Media class:
class Media {
    static totalMediaCount = 0;
    constructor(title, year, genre) {
        Media.totalMediaCount++;
        this.title = title;
        this.year = year;
        this.genre = genre;
        
    }

    summary() {
        return `Title: ${this.title}, Year: ${this.year}, Genre: ${this.genre}`
    }
}
// uncomment below to export it:
module.exports = Media;
