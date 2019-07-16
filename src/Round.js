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
    this.currentTurn = this.startTurn();
  }

  startRound() {
    this.currentSurvey = this.surveys[this.counter];
    console.log('startRound this', this)
    this.setCurrentSurveyAnswers();
  	this.startTurn();
  }

  endRound() {
    this.counter++;
    if (this.counter === 2) {
     this.startFastMoneyRound();
    } else {
      this.startRound();
    }
  }

  startTurn() {
  	this.currentTurn = new Turn(this.game, this);
  	return this.currentTurn;
  }

  setCurrentSurveyAnswers() {
  	this.currentSurveyAnswers = this.answers.filter(answer => answer.surveyId === this.surveys[this.counter].id);
  }

  startFastMoneyRound() {

  }

}

export default Round;