// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import data from './dataset'
import Game from './Game';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png';


console.log('This is the JavaScript entry file - your code begins here.');

let currentGame = new Game(data.surveys, data.answers);
let currentRound = currentGame.startGame();
let currentTurn = currentRound.startRound();

let $surveyQuestion = $('#survey-question');
let $answerOne = $('#answer-one');
let $answerTwo = $('#answer-two');
let $answerThree = $('#answer-three');
let $playerOneNameInput = $('#player-one-name');
let $playerTwoNameInput = $('#player-two-name');

$('#player-one-name-button').on('click', reassignPlayerName);
$('#player-two-name-button').on('click', reassignPlayerName);
$('#guess-button').on('click', handleGuess);

console.log(currentRound.startRound())
console.log(currentTurn)
console.log(currentRound.currentSurveyAnswers)
console.log(currentGame.playerOne, currentGame.playerTwo)

$surveyQuestion.text(currentRound.currentSurvey.question);

currentRound.currentSurveyAnswers.sort((a,b) => b.respondents - a.respondents);

$answerOne.text(currentRound.currentSurveyAnswers[0].answer);
$answerTwo.text(currentRound.currentSurveyAnswers[1].answer);
$answerThree.text(currentRound.currentSurveyAnswers[2].answer);


function reassignPlayerName(e) {
	if(e.target.id === 'player-one-name-button') {
		currentGame.playerOne.name = $playerOneNameInput.val();
	} else {
		currentGame.playerTwo.name = $playerTwoNameInput.val();
	}
}

function handleGuess(e) {
	currentTurn.checkGuess($('#player-answer').val());
	$('#player-answer').val('');
}