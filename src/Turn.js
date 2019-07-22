import domUpdates from './domUpdates';

class Turn {
  constructor() {
    this.allRoundAnswers = [];
  }

  checkGuess(game, guess) {
    if(game.currentRound.currentSurveyAnswers.length === 3) {
      this.allRoundAnswers = game.currentRound.currentSurveyAnswers.slice();
    }
    let index = game.currentRound.currentSurveyAnswers.findIndex(answerObj => answerObj.answer.toLowerCase() === guess.toLowerCase());
    if (index !== -1) {
      domUpdates.flipAnswer(guess, this.allRoundAnswers);
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
  	game.turnCounter++;
  	this.switchPlayer(game);
    if (!game.currentRound.currentSurveyAnswers.length) {
    	this.boardDelay(game);
    }
  }

  switchPlayer(game) {
      domUpdates.showCurrentPlayer(game)
    if (game.currentRound.currentPlayer === game.playerOne) {
      game.currentRound.currentPlayer = game.playerTwo;
  	} else {
  		game.currentRound.currentPlayer = game.playerOne;
      // domUpdates.showCurrentPlayer(game, game.playerOne)
  	}
  }

  boardDelay(game) {
  	setTimeout(function() {
  	  domUpdates.resetAnswerBoard();
  	}, 2000);
  	setTimeout(function() {
  	  game.currentRound.endRound(game);
  	  domUpdates.populateQuestionsAndAnswers(game);
  	}, 2500);
  }

}

export default Turn;