import Player from './Player.js';
import Turn from './Turn.js';
import Game from './Game.js';

class Round {
  constructor(game, surveys, answers) {
    this.game = game;
    this.surveys = surveys;
    this.answers = answers;
    this.counter = 0;
    this.currentSurvey = this.surveys[this.counter]
    this.currentSurveyAnswers;
  }

  startRound() {
    this.setCurrentSurveyAnswers();
  	this.startTurn();
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
  	let currentTurn = new Turn(this.game, this);
  	return currentTurn;
  }

  setCurrentSurveyAnswers() {
  	this.currentSurveyAnswers = this.answers.filter(answer => answer.surveyId === this.surveys[this.counter].id);
  }

  startFastMoneyRound() {
  	
  }

}

export default Round;