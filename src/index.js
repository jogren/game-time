import $ from 'jquery';
import './css/base.scss';
import data from './dataset';
import Game from './Game';
import domUpdates from './domUpdates';

let currentGame;

fetch('https://fe-apps.herokuapp.com/api/v1/gametime/1903/family-feud/data')
  .then(response => response.json())
  .then(dataset => {
  	let dataSurveys = dataset.data.surveys;
  	let dataAnswers = dataset.data.answers;
  	currentGame = new Game(dataSurveys, dataAnswers);
  })
  .catch(error => console.log(error))
 

$('#player-one, #player-two').hide();

$('#start-game-button').on('click', (e) => {
  e.preventDefault(); 
	currentGame.startGame();
	domUpdates.reassignPlayerName(currentGame);
	domUpdates.handleHidingAndShowingElements();
	// $('#player-one-name, #player-two-name').show();
	// $('#player-one, #player-two, .player-scores').show();
	$('#player-one span').text(currentGame.playerOne.name);
  $('#player-two span').text(currentGame.playerTwo.name);
  // $('input#player-one-name, input#player-two-name, .start-screen').hide();
  $('#player-one-points').text(currentGame.playerOne.score);
  $('#player-two-points').text(currentGame.playerTwo.score);
});

$('#end-game-button').on('click', (e) => {
  e.preventDefault();
  domUpdates.startNewGame();
})

$('#guess-button').on('click', (e) => {
  // e.preventDefault();
	domUpdates.handleGuess(currentGame);
  return false;
});


$('#player-answers').hide();