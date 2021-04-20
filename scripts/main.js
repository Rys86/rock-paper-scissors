
//Computer is asking passing the greetings and asking for the first choice
// -> function: userInput
function userInput(userChoice, i) {
  let promption;
  if (userChoice && i > 1) {
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
// -> function: playRound:
function playRound(i) {
  let userChoice;
  let computerChoice;
  // | Program is displaying the round number
  window.alert(`Paper Rock Scissor game!\n\n Round Number ${i}`);
  // | Program is asking for user's input
  userChoice = userInput(userChoice, i);
  // | Program is asking for computer's input
  computerChoice = computerPlay();
  // debuging:
  //console.log(`computer choice: ${computerChoice}\nuser choice: ${userChoice}`)
  // | run the comparing function
  let result = compareChoices(userChoice,computerChoice,relations(userChoice));
  // | program is giving the feedback who wins the round 
  // | show the message about result:
  window.alert(result.message);
  // | return round score
  return {user: result.user, computer: result.computer}
}
// | set relation between choices in regards to user's choice
function relations(userChoice) {
  let relation
  switch (userChoice) {
    case "rock":
      relation = {
        rock: 1,
        paper: 2,
        scissors: 0
      }
      break;
    case "paper":
      relation = {
        rock: 0,
        paper: 1,
        scissors: 2
      }
      break;
    case "scissors":
      relation = {
        rock: 2,
        paper: 0,
        scissors: 1
      }
      break;
  }
  return relation;
}
// | program is comparing his choice with users choice
function compareChoices(userChoice, computerChoice, relation) {
  if (relation[userChoice] > relation[computerChoice]) {
    return {message: `Congratulations: ${userChoice} bits ${computerChoice}!\n\nUser wins!`, user:1,computer:0};
  } else if (relation[userChoice] < relation[computerChoice]) {
    return {message: `Sorry: ${computerChoice} bits ${userChoice}!\n\nComputer wins!`, user:0,computer:1};
  } else if (relation[userChoice] == relation[computerChoice]) {
    return {message: `Round ends with draw!\n\nBoth Plyers choice was: ${computerChoice}`, user:1,computer:1};
  }
}
/*
Debuging
let test = playRound(1)
console.log(`User score: ${test.user}\nComputer score: ${test.computer}`);
*/
// - > Function: game
// | Program is playing 5 rounds
// | program is sumarizing the score
//