import $ from 'jquery';
import './css/base.scss';
import data from './dataset';
import Game from './Game';
import domUpdates from './domUpdates';

let dataSurveys; 
let dataAnswers; 
let currentGame;

fetch('https://fe-apps.herokuapp.com/api/v1/gametime/1903/family-feud/data')
  .then(response => response.json())
  .then(dataset => {
  	dataSurveys = dataset.data.surveys;
  	dataAnswers = dataset.data.answers;
  })
  .catch(error => console.log(error))

function checkFetch () {
		currentGame = new Game(dataSurveys, dataAnswers)
		currentGame.startGame();
}
 
$('#player-name-button').on('click', () => {
	checkFetch();
	domUpdates.reassignPlayerName(currentGame);
});

$('#guess-button').on('click', () => {
	domUpdates.handleGuess(currentGame);
});