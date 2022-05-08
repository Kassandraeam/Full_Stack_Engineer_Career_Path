class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get title() {
      return this._title;
    }
    get isCheckedOut() {
      return this._isCheckedOut;
    }
    get ratings() {
      return this._ratings;
    }
    set isCheckedOut(value){
        this._isCheckedOut = value;
    }
    toggleCheckOutStatus() {
    if (this._isCheckedOut === false){
      this._isCheckedOut = true;
    } else if (this._isCheckedOut === true){
      this._isCheckedOut = false;
    }
  }
    getAverageRating() {
    return this._ratings.reduce((a,b) => a+ b) / this._ratings.length;
  }
    addRating(inputValue) {
    this.ratings.push(inputValue);
  }
}
  
  class Book extends Media {
    constructor(author, title, pages) {
      super(title);
      this._author = author;
      this._pages = pages;
    }
    get author(){
      return this._author;
    }
    get pages(){
      return this._pages;
    }
  }
  
  class Movie extends Media {
    constructor(director, title, runTime) {
      super(title);
      this._director = director;
      this._runTime = runTime;
    }
    get director(){
      return this._director;
    }
    get runTime(){
      return this._runTime;
    }
  }
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  
  
  
  
  
  
  
  
