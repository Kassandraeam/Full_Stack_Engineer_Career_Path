/*
Print all the numbers from 1 to 100.
Numbers divisble by 3, print 'fizz'. numbers divisible by 5 (and NOT 3), print 'Buzz'

Print "fizzbuzz" for numbers that are divisble by both 3 and 5.
so we want to iterate through numbers 1-100. i.isInteger
*/


// for (let counter = 1; counter <= 100; counter ++){
//     if (counter % 3 === 0) {
//         console.log('Fizz');
//     } else if (counter % 5 === 0) {
//         console.log('Buzz');
//     } else if (counter % 3 === 0 && counter % 5 === 0){
//         console.log('FizzBuzz');
//     } else {
//         console.log(counter);
//     }
// };

for (let counter = 1; counter <= 100; counter ++){
    if (counter % 3 === 0 && counter % 5 === 0){
        console.log('FizzBuzz');
    } else if (counter % 3 === 0) {
        console.log('Fizz');
    } else if (counter % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(counter);
    }
};

