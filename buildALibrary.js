//Parent class
class Media {
    constructor(title) { //choose the parameter without any values, but also in all of the subclasses.
      this._title = title; //Setting the values that all three subclasses share.
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get title() { // Getters are methods that get & return the internal properties of the object.
      return this._title;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    get ratings() {
      return this._ratings;
    }
    set isCheckedOut(value){ // This is a setter that is reassigning the existing property.
        this._isCheckedOut = value; //Here I'm saying that this property is equal to the parameter value.
    }
    //Following syntax negates the value saved to the boolean
    toggleCheckOutStatus() { //This is a method that changes the value under isCheckedOut.
    this._isCheckedOut = !this._isCheckedOut;
  }
    getAverageRating() { //Another method that uses the reduce method to get the sum of the array.
    return this._ratings.reduce((a,b) => a+ b) / this._ratings.length;
  }
    addRating(inputValue) { //Another method that pushes the input value into the array; ratings.
    if (inputValue >= 1 && inputValue <= 5){
    this.ratings.push(inputValue);
    } else {
      return console.log('Please enter a rating between 1 and 5.')
    }
  }
    addSongs(songName){
      this.songs.push(songName);
    }
}
 //subclass 1 
  class Book extends Media { //In order to access the properties of Media for a new class, I need to use the keyword class, the new subclass name, extends, and the parent class
    constructor(author, title, pages, chapters) { //Create constructor and input arguments that do not have default values.
      super(title); //The super keyword calls the constructor of the parent class
      this._author = author;
      this._pages = pages;
      this._chapters = chapters;
    }
    get author(){
      return this._author;
    }
    get pages(){
      return this._pages;
    }
    get chapters(){
      return this._chapters;
    }
  }
  
  class Movie extends Media {
    constructor(director, title, runTime, movieCast) {
      super(title);
      this._director = director;
      this._runTime = runTime;
      this._movieCast = movieCast;
    }
    get director(){
      return this._director;
    }
    get runTime(){
      return this._runTime;
    }
    get movieCast(){
      return this._movieCast;
    }
  }

  class CD extends Media{
    constructor(artist, title, runTime) {
      super(title);
      this._firstTrack = artist;
      this._runTime = runTime;
      this._songs = [];
    }
    get firstTrack(){
      return this._firstTrack;
    }
    get runTime(){
      return this._runTime;
    }
  }

//instance: An object that contains the property names & methods of a class, but with unique properties
const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
const speed = new Movie('Jan de Bont', 'Speed', 116);
  
historyOfEverything.toggleCheckOutStatus;
console.log(historyOfEverything.isCheckedOut);  
historyOfEverything.addRating(3);
historyOfEverything.addRating(2);
historyOfEverything.addRating(1);
console.log(historyOfEverything.getAverageRating());

speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5); 

console.log(speed.getAverageRating());

const testingSongs = new CD('Harry Styles', 'The Way it Was', 120)

  
