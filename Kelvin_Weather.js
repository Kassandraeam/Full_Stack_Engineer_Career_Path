// This is the constant for kelvin.
let kelvin = 293;
//Celcius is 273 degrees less than Kelvin.
celsius = kelvin - 273;
//Established the variable fahrenheit.
let fahrenheit = celsius * (9/5) + 32;

//This will round down the Fahrenheit temperature.
fahrenheit = Math.floor(fahrenheit);

//console.log(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
