import Player from './Player.js';
import Turn from './Turn.js';
import Game from './Game.js';
import FastMoneyTurn from './FastMoneyTurn.js';

class Round {
  constructor(game, survey, answers) {
    this.currentSurvey = survey;
    this.currentSurveyAnswers = answers;
    this.currentTurn = this.startTurn();
    this.currentPlayer = game.playerOne;
  }

  endRound(game) {
    game.roundCounter++;
    if (game.roundCounter >= 2) {
     	this.startFastMoneyTurn(game);
		} else {
		  game.startNewRound();
	 	}
 	}
   
  startTurn() {
    this.currentTurn = new Turn();
  	return this.currentTurn;
  }

  startFastMoneyTurn(game) {
    game.startNewRound();
    game.currentRound.currentTurn = new FastMoneyTurn();
  }

}

export default Round;