let raceNumber = Math.floor(Math.random()*1000);

const registeredEarly = false;

let runnerAge = 24;

if (runnerAge > 18 && registeredEarly === true)
{
  (raceNumber += 1000);
} else if (runnerAge > 18 && registeredEarly === false) {
  console.log(`${raceNumber}, you will race at 11:00am`);
} else if (runnerAge > 18 && registeredEarly === true) {
  console.log(`${raceNumber}, you will race at 9:30am`);
} else if (runnerAge < 18) {
  console.log(`${raceNumber} you will race at 12:30PM`);
} else 
  console.log('Go see the registration desk. :)');
