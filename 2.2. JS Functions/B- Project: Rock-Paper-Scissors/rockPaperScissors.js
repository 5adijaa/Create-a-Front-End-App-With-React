const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || 'paper' || 'scissors' || 'bomb'){
     return userInput;
     }
  else {
    console.log('Invalid userInput');
  }
};

// const test = getUserChoice('rock');
// console.log(test);

function getComputerChoice(){
  let randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber){
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}
  
// console.log(getComputerChoice());
// console.log(getComputerChoice());
// console.log(getComputerChoice());


function determineWinner(userChoice, computerChoice){
  if(computerChoice === userChoice){
    return 'The game was tie.';
  }
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'The computer won';
    }else if(computerChoice === 'scissors'){
      return 'The user won';
    } 
  }
  else if(userChoice === 'paper'){
    if(computerChoice === 'scissors'){
      return 'The computer won';
    }else if(computerChoice === 'rock'){
      return 'The user won';
    } 
  }
  else if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'The computer won';
    }else if(computerChoice === 'paper'){
      return 'The user won';
    } 
  }
  if(userChoice === 'bomb'){
    return 'You won';
  }
  if(userChoice !== 'rock' || 'paper' || 'scissors' || 'bomb'){
    return 'invalid user choice';
  }
  
}

// console.log(determineWinner('paper', 'scissors'));
// console.log(determineWinner('paper', 'rock'));


const playGame = () => {
  const userChoice = getUserChoice('bombb');
  const computerChoice = getComputerChoice();
  console.log('You threw: ' + userChoice);
  console.log('The computer threw: ' + computerChoice);
  const winner = determineWinner(userChoice, computerChoice);
  console.log(winner);
};

playGame();
