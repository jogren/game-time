import domUpdates from './domUpdates';
import Turn from './Turn';

class FastMoneyTurn extends Turn {
  constructor() {
    super();
    this.guessCount = 0;
    this.timeoutId = null; 
  }

  checkGuess(game, guess) { 
    if (this.guessCount === 0) {
      this.timeTurn(game);
    }
    this.guessCount++;
    let index = game.currentRound.currentSurveyAnswers.findIndex(answerObj => answerObj.answer.toLowerCase() === guess.toLowerCase());
    if (index !== -1) {
      domUpdates.flipAnswer(guess);
      let targetAnswer = game.currentRound.currentSurveyAnswers.splice(index, 1)[0];
      this.assignPoints(game, targetAnswer);
    } else {
      domUpdates.showWrongAnswer();
    }
    this.endTurn(game);
  }


  endTurn(game) {
    if (!game.currentRound.currentSurveyAnswers.length && game.roundCounter === 2) {
      setTimeout(function() {
        domUpdates.resetAnswerBoard();
      },2000);
      setTimeout(function() {
        game.currentRound.startFastMoneyTurn(game);
        domUpdates.populateQuestionsAndAnswers(game);
      }, 3500);
      
      clearTimeout(this.timeoutId);
      game.roundCounter++;
      game.currentRound.currentPlayer = game.playerTwo;

     

      super.switchPlayer(game)
    } else if (!game.currentRound.currentSurveyAnswers.length && game.roundCounter === 3) {
      clearTimeout(this.timeoutId);
      game.endGame();
    }
  }

  timeTurn(game) {
      let timer = 30;
      domUpdates.handleTimer(timer, game.currentRound.currentSurveyAnswers)
      this.timeoutId = setTimeout(() => {
      console.log('timeout!')
      if (game.roundCounter === 2) {
        setTimeout(function() {
          domUpdates.resetAnswerBoard();
        },2000);
        setTimeout(function() {
          game.currentRound.startFastMoneyTurn(game);
          domUpdates.populateQuestionsAndAnswers(game);
        }, 3500);
        game.roundCounter++;
        // game.currentRound.startFastMoneyTurn(game);
        super.switchPlayer(game)
        // domUpdates.populateQuestionsAndAnswers(game);
      } else if (game.roundCounter === 3) {
        game.endGame();
      }
    }, 30000)
  }

}

export default FastMoneyTurn;