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


console.log('This is the JavaScript entry file - your code begins here.');

let currentGame = new Game(data.surveys, data.answers);
currentGame.currentRound.startRound();
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
  domUpdates.handleGuess(currentGame.currentRound.currentTurn);
});

// $surveyQuestion.text(currentRound.currentSurvey.question);

// currentRound.currentSurveyAnswers.sort((a,b) => b.respondents - a.respondents);

// $answerOne.text(currentRound.currentSurveyAnswers[0].answer);
// $answerTwo.text(currentRound.currentSurveyAnswers[1].answer);
// $answerThree.text(currentRound.currentSurveyAnswers[2].answer);

