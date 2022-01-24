```jsx
//notes: 8 human years = 45 dog years. How old would you be if you were a dog? So 1 human year = 5.625 dog years. Therefore, 27* 5.625 is equal to about 151 years.
//Wait so the first 2 years of a dog's life is equal to 10.5 years each. So it's (2(10.5))+4x.

let myAge = 27;
let earlyYears = 2;

earlyYears *= 10.5;

let laterYears = myAge - 2;

laterYears *= 4;

myAgeInDogYears = earlyYears + laterYears;

let myName = 'Kassy'.toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
```

This would print:

My name is kassy. I am 27 years old in human years which is 121 years old in dog years.
