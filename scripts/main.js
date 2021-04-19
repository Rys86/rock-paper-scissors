
//Computer is asking passing the greetings and asking for the first choice
// -> function: userInput
function userInput(userChoice, i) {
  let promption;
  if (userChoice) {
    // | computer is making the request for next choice
    return showPrompt(`Round number: ${i}!\n\nMake your choice: "rock", "paper" or "scissors":\n`, i);
  } else {
    //Computer is asking passing the greetings and asking for the first choice
    return showPrompt('Hello User, this is your first round!\n\nMake your choice: "rock", "paper" or "scissors":\n', i);
  }
}

function showPrompt(message, i) {
  let promption = window.prompt(message,"").toLowerCase();
  return promptValidation(promption, i);
}

function promptValidation(userChoice, i) { 
  // | program is validating users imput
  if (userChoice == "rock" || userChoice == "paper" || userChoice == "scissors") {
    return userChoice;
  } else { 
    // | if users imput is invalid, computer is asking for imput once again
    window.alert(`Incorrect input value: "${userChoice}"!\n\nPlease,type one of those: "rock", "paper" or "scissors"`)
    return userInput(userChoice, i);
  }
}

/* debuging:
let choice = "nothing";
console.log(`choice type: ${choice}`)
console.log(`userInlut function result: ${userInput(choice, 1)}`);
*/
// -> function: computerPlay
function computerPlay() {
  // |Computer is drawing a lots 
  let draw = Math.floor(Math.random()*9);
  if (draw < 3) {
    return "rock";
  } else if (draw < 6) {
    return 'paper'
  } else {
    return 'scissors';
  }
}
/* debuging computerPlay
for (let i = 0; i < 15; i++) {
  console.log(`result no ${i} of computerPlay function: ${computerPlay()}`);
}
*/
// |Computer is drawing a lots 
// -> function: playRound:
// | program is comparing his choice with users choice
// | program is giving the feedback who wins the round 
// - > Function: game
// | Program is playing 5 rounds
// | program is sumarizing the score
//