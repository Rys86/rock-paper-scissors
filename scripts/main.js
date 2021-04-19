console.log("Hello World!");
let promption = window.prompt("Please, type in some random text.","Very random text.");
window.alert(promption);
//Computer is asking passing the greetings and asking for the first choice
// -> function: userInput
function userInput(userChoice) {
  if (userChoice) {
    // | computer is making the request for next choice
    let promption = window.prompt("Please, type in some random text.","");

  } else {
    //Computer is asking passing the greetings and asking for the first choice
  }
}
function promptValidation(userChoice) { 
  // | program is validating users imput
  if (userChoice == "rock" || userChoice == "paper" || userChoice == "scissors") {
    return userChoice;
  } else { 
    // | if users imput is invalid, computer is asking for imput once again
    window.alert(`Incorrect input value: ${userChoice}, please, type one of those: rock, paper or scissors`)
    return userInput(userChoice);
  }
}

// -> function: computerPlay
// |Computer is drawing a lots 
// -> function: playRound:
// | program is comparing his choice with users choice
// | program is giving the feedback who wins the round 
// - > Function: game
// | Program is playing 5 rounds
// | program is sumarizing the score
//