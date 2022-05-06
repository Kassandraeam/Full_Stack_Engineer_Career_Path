betterThanAverage = (classPoints, yourPoints) => {
    
    let sum = classPoints.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 0);

    let classAverage = (sum / classPoints.length);

    if (yourPoints > classAverage) {
        return true;
    } else {
        return false;
    }
};

/*

A better way to solve this 

function betterThanAverage(classPoints, yourPoints) {
    return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
  }
  
*/

//https://www.codewars.com/kata/5601409514fc93442500010b
