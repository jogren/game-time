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
 
$('#start-game-button').on('click', () => {
	currentGame.startGame();
	domUpdates.reassignPlayerName(currentGame);
  console.log(currentGame)
});

$('#guess-button').on('click', () => {
	domUpdates.handleGuess(currentGame);
  console.log(currentGame)
});