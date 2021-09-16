/*
//Computer is asking passing the greetings and asking for the first choice
// -> function: userInput
*/

//Buttons:
const paperButton = document.querySelector(".plyer > .paper");
const scissorsButton = document.querySelector(".plyer > .scissors");
const rockButton = document.querySelector(".plyer > .rock");
const paperComputer = document.querySelector(".computer > .paper");
const scissorsComputer = document.querySelector(".computer > .scissors");
const rockComputer = document.querySelector(".computer > .rock");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const popupButton = document.querySelector("#popupButton");
const plyerButtons = document.querySelectorAll(".plyer > .buttons");

const roundNo = document.querySelector("#roundNo");
const roundScore = document.querySelector("#roundScore");

const plyerScre = document.querySelector("#plyerScre");
const compScre = document.querySelector("#compScre");
const finalPopup = document.querySelector(".popup");
const popupMessage = document.querySelector("#popupMessage");

let computerScore = 0;
let userScore = 0;
let flag = 0;
compScre.textContent = computerScore;
plyerScre.textContent = userScore;

let i = 1;

function showResult(who, what) {
	let result = document.querySelector(`.ChoicePad > .${who}`);
	switch (what) {
		case "rock":
			result.innerHTML = '<i class="far fa-hand-rock"></i>';
			break;
		case "paper":
			result.innerHTML = '<i class="far fa-hand-paper"></i>';
			break;
		case "scissors":
			result.innerHTML = '<i class="far fa-hand-scissors"></i>';
			break;
	}
	result.classList.add("press");
	return result;
}

function userInput(userChoice, i) {
	let promption;
	if (i > 1) {
		// | computer is making the request for next choice
		return showPrompt(
			`Round number: ${i}!\n\nMake your choice: "rock", "paper" or "scissors":\n`,
			i
		);
	} else {
		//Computer is asking passing the greetings and asking for the first choice
		return showPrompt(
			'Hello User, this is your first round!\n\nMake your choice: "rock", "paper" or "scissors":\n',
			i
		);
	}
}

function showPrompt(message, i) {
	let promption = window.prompt(message, "").toLowerCase();
	return promptValidation(promption, i);
}

function promptValidation(userChoice, i) {
	// | program is validating users imput
	if (
		userChoice == "rock" ||
		userChoice == "paper" ||
		userChoice == "scissors"
	) {
		return userChoice;
	} else {
		// | if users input is invalid, computer is asking for input once again
		window.alert(
			`Incorrect input value: "${userChoice}"!\n\nPlease,type one of those: "rock", "paper" or "scissors"`
		);
		return userInput(userChoice, i);
	}
}

/* debugging:
let choice = "nothing";
console.log(`choice type: ${choice}`)
console.log(`userInput function result: ${userInput(choice, 1)}`);
*/
// -> function: computerPlay
function computerPlay() {
	// |Computer is drawing a lots
	let draw = Math.floor(Math.random() * 9);
	if (draw < 3) {
		rockComputer.classList.add("press");
		return "rock";
	} else if (draw < 6) {
		paperComputer.classList.add("press");
		return "paper";
	} else {
		scissorsComputer.classList.add("press");
		return "scissors";
	}
}
/* debugging computerPlay
for (let i = 0; i < 15; i++) {
  console.log(`result no ${i} of computerPlay function: ${computerPlay()}`);
}
*/
// -> function: playRound:
function playRound(i, choice) {
	let userChoice;
	let computerChoice;
	// | Program is displaying the round number
	// window.alert(`Paper Rock Scissor game!\n\n Round Number ${i}`);
	i == null ? (roundNo.textContent = 1) : (roundNo.textContent = i);
	// | Program is asking for user's input
	userChoice = choice;
	showResult("plyer", choice);
	// | Program is asking for computer's input
	computerChoice = computerPlay();
	showResult("computer", computerChoice);
	// debugging:
	console.log(`computer choice: ${computerChoice}\nuser choice: ${userChoice}`);
	// | run the comparing function
	let result = compareChoices(
		userChoice,
		computerChoice,
		relations(userChoice)
	);
	// | program is giving the feedback who wins the round
	// | show the message about result:
	// window.alert(result.message);
	roundScore.textContent = result.message;
	// | return round score
	return { user: result.user, computer: result.computer };
}
// | set relation between choices in regards to user's choice
function relations(userChoice) {
	let relation;
	switch (userChoice) {
		case "rock":
			relation = {
				rock: 1,
				paper: 2,
				scissors: 0,
			};
			break;
		case "paper":
			relation = {
				rock: 0,
				paper: 1,
				scissors: 2,
			};
			break;
		case "scissors":
			relation = {
				rock: 2,
				paper: 0,
				scissors: 1,
			};
			break;
	}
	return relation;
}
// | program is comparing his choice with users choice
function compareChoices(userChoice, computerChoice, relation) {
	if (relation[userChoice] > relation[computerChoice]) {
		return {
			message: "Player Win!", //`Congratulations: ${userChoice} bits ${computerChoice}!\n\nUser wins!`,
			user: 1,
			computer: 0,
		};
	} else if (relation[userChoice] < relation[computerChoice]) {
		return {
			message: "Computer Win!", //`Sorry: ${computerChoice} bits ${userChoice}!\n\nComputer wins!`,
			user: 0,
			computer: 1,
		};
	} else if (relation[userChoice] == relation[computerChoice]) {
		return {
			message: "Draw!", //`Round ends with draw!\n\nBoth Plyers choice was: ${computerChoice}`,
			user: 1,
			computer: 1,
		};
	}
}
/*
Debugging
let test = playRound(1)
console.log(`User score: ${test.user}\nComputer score: ${test.computer}`);
*/
// - > Function: game
function game(choice) {
	/*
	const plyerScre = document.querySelector("#plyerScre");
	const compScre = document.querySelector("#compScre");
	let computerScore = 0;
	let userScore = 0;
	compScre.textContent = computerScore;
	plyerScre.textContent = userScore;
	*/
	// window.alert("Let's play some Rock Paper Scissor game!");
	// | Program is playing 5 rounds
	// for (let i = 1; i < 6; i++) {
	if (i < 6) {
		let round = playRound(i, choice);
		// | program is summarizing the score
		computerScore = computerScore + round.computer;
		userScore = userScore + round.user;
		compScre.textContent = computerScore;
		plyerScre.textContent = userScore;
		if (round.computer == 1) {
			compScre.classList.add("scale");
		}
		if (round.user == 1) {
			plyerScre.classList.add("scale");
		}
		i++;
	}
	if (i >= 6) {
		i = 1;
		flag = 0;
		// | computer is giving the feedback about the winner:
		let stdMessage = `Final score after five rounds: <br>User: ${userScore}<br>Computer: ${computerScore}<br><br>`;
		// | compare the scores:
		if (userScore > computerScore) {
			popupMessage.innerHTML = `${stdMessage}<br> Congratulations! <br><br>User Wins!!!`;
		} else if (userScore < computerScore) {
			popupMessage.innerHTML = `${stdMessage}<br> Congratulations! <br><br>Computer Wins!!!`;
		} else {
			popupMessage.innerHTML = `${stdMessage}<br> Game ends with draw!`;
		}
		plyerButtons.forEach((plyerButton) => (plyerButton.style.cursor = "alias"));
		finalPopup.style.zIndex = "1";
	}

	// Transition
}
function removeTransition(e) {
	if (e.propertyName !== "transform") {
		return; // skip all events that are not the transform
	}
	// console.log(e.propertyName);
	// console.log(this);
	// "this" return int the element to which event listener is refering to, in this case, to "key"
	this.classList.remove("press");
	this.classList.remove("scale");
}

function addTransition() {
	//console.log(this);
	let what = this.dataset.choice;
	if (flag == 1) {
		this.classList.add("press");
		game(what);
	}
}

function switchTheFlag() {
	this.classList.add("press");
	flag = this.dataset.flagg;
	//console.log(`flag is equal = ${flag}`);
	if (flag == 1) {
		computerScore = 0;
		userScore = 0;
		i = 1;
		compScre.textContent = computerScore;
		plyerScre.textContent = userScore;
		roundNo.textContent = i;
		roundScore.textContent = "Let's start The Game";
		roundScore.classList.add("scale");
		let results = document.querySelectorAll(".ChoicePad > *");
		plyerButtons.forEach(
			(plyerButton) => (plyerButton.style.cursor = "pointer")
		);
		results.forEach((result) => {
			result.innerHTML = "";
			result.classList.add("press");
		});
	}
}

function hidePopup() {
	this.classList.add("press");
	finalPopup.style.zIndex = "-1";
}

const buttons = document.querySelectorAll(".buttons");
const items = document.querySelectorAll("*"); // create a list of all buttons
//console.log(buttons);
items.forEach((item) =>
	item.addEventListener("transitionend", removeTransition)
);
startButton.addEventListener("click", switchTheFlag);
stopButton.addEventListener("click", switchTheFlag);
paperButton.addEventListener("click", addTransition);
scissorsButton.addEventListener("click", addTransition);
rockButton.addEventListener("click", addTransition);
popupButton.addEventListener("click", hidePopup);
//game();
