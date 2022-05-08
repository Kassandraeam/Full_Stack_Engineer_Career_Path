class Parent {
    constructor (properties, properties2, properties3){
        this._properties = properties;
        this._properties2 = properties2;
        this._properties3 = properties3;
    }
    get properties(){
        return this._properties;
    }
    get properties2(){
        return this._properties2;
    }
    get properties3(){
        return this._properties3;
    }
    set properties3(value){
        return this._properties3 = value;
        //this will 'set' the property3 to the value that has been input.
    }
    method(){
        console.log('This is a quick function that we can access through any child class.');
    }
    static staticMethod(thisIsAStaticMethod){
        //static methods are called on the CLASS, but not on all INSTANCES of the class. So every class has them, but not every instance does.
        return console.log(`This is a ${thisIsAStaticMethod}`);
    }
}
//Child classes go under the parent class

class childOne extends Parent{
    constructor(properties2, properties3, anyNewProperty){
        super('You will not be prompted to fill this in because it\'s filled in the super keyword of this child element.', properties2, properties3)
        //Any properties that are individual to this class must be added in this format:
        this._anyNewProperty = anyNewProperty;
    }
    //and any new property must get a getter.
    get anyNewProperty(){
        return this._anyNewProperty;
    }
}

//creating an instance to show how to call a child.

const testing = new childOne('Properties 2', 'Properties 3', 'Any New Property');

console.log(testing);

