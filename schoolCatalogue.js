class School {
    constructor(name, level, numberOfStudents){
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }
    get name(){
        return this._name;
    }
    get level(){
        return this._level;
    }
    get numberOfStudents(){
        return this._numberOfStudents;
    }
    set numberOfStudents(newNumberOfStudents){
        return (typeof newNumberOfStudents == 'numbers' ? this._numberOfStudents = newNumberOfStudents:'Invalid input: numberOfStudents must be set to a Number')
    }
    quickFacts(){
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level`);
    }
    static pickSubstituteTeacher(substituteTeachers){
        let randomTeacher = Math.floor(Math.random()*(substituteTeachers.length - 1));
        return substituteTeachers[randomTeacher];
    }
}

class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy, napTime){
        super(name, 'Primary', numberOfStudents); 
        this._pickupPolicy = pickupPolicy;
        this._napTime = napTime;
    }
    get pickupPolicy(){
        return this._pickupPolicy;
    }
    get napTime(){
        return this._napTime;
    }
    set napTime(value){
        this._napTime = value;
    }
}

class Middleschool extends School {
    constructor(name, numberOfStudents, extraCurricular){
        super (name, 'Middle', numberOfStudents)
        this._extraCurricular = extraCurricular;
    }
    get extraCurricular(){
        return this._extraCurricular;
    }
}

class Highschool extends School{
    constructor(name, numberOfStudents, sportsTeams, mascot){
        super(name, 'Highschool', numberOfStudents);
        this._sportsTeams = sportsTeams;
        this._mascot = mascot;
    }
    get sportsTeams(){
        console.log(this._sportsTeams);
        return this._sportsTeams;
    }
    get mascot(){
        return this._mascot;
    }
}


const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

console.log(lorraineHansbury);
lorraineHansbury.quickFacts();

console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

const alSmith = new Highschool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);

const testing = new PrimarySchool()

alSmith.sportsTeams;

const testingPrimary = new PrimarySchool ('Alex', 200, 'Must be a parent or guardian', true);
console.log(testingPrimary);

const testingMiddle = new Middleschool('Kassy', 200,'Band');
console.log(testingMiddle);

const testingHigh = new Highschool('Gabby', 100, ['Basketball', 'Volleyball', 'Soccer'],'Wolverine');
console.log(testingHigh);


