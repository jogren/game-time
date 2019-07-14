import Player from './Player.js';
import Turn from './Turn.js';
import Game from './Game.js';

class Round {
  constructor(game, surveys, answers) {
    this.surveys = surveys;
    this.answers = answers;
    this.counter = 0;
    this.currentSurvey = this.surveys[this.counter]
    this.currentSurveyAnswers;
    this.currentPlayer = game.playerOne;
    this.multiplier = 1;
  }

  startRound() {
  	this.startTurn();
    this.setCurrentSurveyAnswers();
    //return the surveys to display on dom?
  }

  endRound() {
    this.counter++;
    this.startRound();
    if (this.counter === 2) {
     this.startFastMoneyRound();
    } 
  }

  startTurn() {
  	let currentTurn = new Turn(this);
  	return currentTurn;
  }

  setCurrentSurveyAnswers() {
  	this.currentSurveyAnswers = this.answers.filter(answer => answer.surveyId === this.surveys[this.counter].id);
  }

  startFastMoneyRound() {
  	
  }

}

export default Round;