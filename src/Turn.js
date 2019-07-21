import domUpdates from './domUpdates';

class Turn {
  constructor() {
  }

  checkGuess(game, guess) {
    let index = game.currentRound.currentSurveyAnswers.findIndex(answerObj => answerObj.answer.toLowerCase() === guess.toLowerCase());
    if (index !== -1) {
      let targetAnswer = game.currentRound.currentSurveyAnswers.splice(index, 1)[0];
      this.assignPoints(game, targetAnswer);
    } else {
      domUpdates.showWrongAnswer();
    }
    this.endTurn(game); 	
  }

  assignPoints(game, targetAnswer) {
    game.currentRound.currentPlayer.score += targetAnswer.respondents * game.currentRound.currentPlayer.multiplier;
  }

  endTurn(game) {
  	this.switchPlayer(game);
    if (!game.currentRound.currentSurveyAnswers.length) {
      game.currentRound.endRound(game);
      domUpdates.populateQuestionsAndAnswers(game.currentRound);
    }
  }

  switchPlayer(game) {
  	if (game.currentRound.currentPlayer === game.playerOne) {
  		game.currentRound.currentPlayer = game.playerTwo;
  	} else {
  		game.currentRound.currentPlayer = game.playerOne;
  	}
  }
}

export default Turn;