// This is the JavaScript entry file - your code begins here
// Do not delete or rename this file ********

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import data from './dataset';
import Game from './Game';
import domUpdates from './domUpdates';
// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png';


// console.log('This is the JavaScript entry file - your code begins here.');

<<<<<<< Updated upstream
let currentGame = new Game(data.surveys, data.answers);
currentGame.startGame();
console.log(currentGame);


// let $surveyQuestion = $('#survey-question');
// let $answerOne = $('#answer-one');
// let $answerTwo = $('#answer-two');
// let $answerThree = $('#answer-three');
// let $playerOneNameInput = $('#player-one-name');
// let $playerTwoNameInput = $('#player-two-name');

$('#player-one-name-button').on('click', function(e) {
  domUpdates.reassignPlayerName(e, currentGame);
});
$('#player-two-name-button').on('click', function(e) {
  domUpdates.reassignPlayerName(e, currentGame);
});
$('#guess-button').on('click', function() {
  domUpdates.handleGuess(currentGame);
});
=======
let dataSurveys; 
let dataAnswers; 
let currentGame;

// let currentRound;
// let currentTurn;

fetch('https://fe-apps.herokuapp.com/api/v1/gametime/1903/family-feud/data')
  .then(response => response.json())
  .then(dataset => {
  	dataSurveys = dataset.data.surveys;
  	dataAnswers = dataset.data.answers;
  })
  .catch(error => console.log(error))

// let currentGame = new Game(data.surveys, data.answers);

function checkFetch () {
	if (!dataSurveys || !dataAnswers) {
		checkFetch()
	} else {
		currentGame = new Game(dataSurveys, dataAnswers)
		currentGame.startGame();
		// currentRound = currentGame.startGame();
		// currentTurn = currentRound.startRound();
	}
}
 
$('#player-name-button').on('click', () => {
	checkFetch();
	domUpdates.reassignPlayerName(currentGame);
	console.log(currentGame);
});

$('#guess-button').on('click', () => {
	domUpdates.handleGuess(currentTurn);
	domUpdates.populateQuestionsAndAnswers(currentRound);
});

// currentGame.startGame();
// console.log(currentRound.startRound())
// console.log(currentTurn)
// console.log(currentRound.currentSurveyAnswers)
// console.log(currentGame.playerOne, currentGame.playerTwo)
>>>>>>> Stashed changes

// $surveyQuestion.text(currentRound.currentSurvey.question);

// currentRound.currentSurveyAnswers.sort((a,b) => b.respondents - a.respondents);

// $answerOne.text(currentRound.currentSurveyAnswers[0].answer);
// $answerTwo.text(currentRound.currentSurveyAnswers[1].answer);
// $answerThree.text(currentRound.currentSurveyAnswers[2].answer);

