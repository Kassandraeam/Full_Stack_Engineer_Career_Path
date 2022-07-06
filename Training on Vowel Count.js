/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

let vowels = ['a', 'e', 'i', 'o', 'u'];         // array
getCount = (str) => {
    let count = 0;                              // Was getting nan but that was because I didn't set count equal to 0.
    let strArray = Array.from(str);             // array
    for (let i = 0; i<strArray.length; i++){
        for (let j = 0; j<vowels.length; j++) {
            if (strArray[i] === vowels[j]){
                count++;
            }
        }
    }
    return console.log(parseInt(count));
};
