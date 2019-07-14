import Player from './Player.js';
import Turn from './Turn.js';
import Game from './Game.js';

class Round {
  constructor(game, surveys, answers) {
  	console.log(this.surveys)
    this.surveys = surveys;
    this.answers = answers;
    this.counter = 0;
    this.currentSurveyAnswers = this.answers.filter(answer => answer.surveyId === this.surveys[this.counter].id);
    this.currentPlayer = game.playerOne;
    this.multiplier = 1;
  }

  startRound() {
  	this.startTurn();
    return this.surveys[this.counter];
    //return the surveys to display on dom?
  }

  endRound() {
    this.counter++;
    if (this.counter < 2) {
     this.startRound();
    }
    else {
     this.startFastMoneyRound();
    } 
  }

  startTurn() {
  	let currentTurn = new Turn(this);
  	return currentTurn;
  }

  startFastMoneyRound() {

  }

}

export default Round;