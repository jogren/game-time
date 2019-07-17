import Player from './Player.js';
import Turn from './Turn.js';
import Game from './Game.js';

class Round {
  constructor(game, survey, answers) {
    this.game = game;
    this.currentSurvey = survey;
    this.currentSurveyAnswers = answers;
    this.currentTurn = this.startTurn(game);
  }

  endRound(game) {
    game.roundCounter++;
    if (game.roundCounter === 2) {
      console.log('you are done playing two rounds')
     	this.startFastMoneyTurn();
		} else {
		  game.startNewRound();
	 	}
 	}
   
  startTurn(game) {
    this.currentTurn = new Turn(game);
    console.log(this.currentTurn, 'inside round startTurn()')
  	return this.currentTurn;
  }

  startFastMoneyTurn() {

  }

}

export default Round;