
import Player from './Player.js';
import Turn from './Turn.js';
const playerOne = new Player();


class Round {
  constructor(surveys, answers) {
    this.surveys = surveys;
    this.answers = answers;
    this.counter = 0;
    this.currentSurveyAnswers = this.answers.filter(answer => answer.surveyId === this.surveys[this.counter].id);
    this.currentPlayer = playerOne;
    this.multipler = 1;
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
    if(this.counter === 2) {
     this.startFastMoneyRound();
     // this.multiplier = userMultiplier;
    } 
  }

  startTurn() {
  	let currentTurn = new Turn();
  	return currentTurn;
  }

  startFastMoneyRound() {

  }

}

export default Round;