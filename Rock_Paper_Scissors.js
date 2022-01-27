const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (userInput === 'Rock' || userInput === 'Paper' || userInput === 'Scissors')
  return userInput;
};

getUserChoice('rock');
