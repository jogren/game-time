import domUpdates from './domUpdates';
import Turn from './Turn';

class FastMoneyTurn extends Turn {
  constructor() {
    super();
  }

  endTurn(game) {
    if (!game.currentRound.currentSurveyAnswers.length && game.roundCounter === 2) {
      game.roundCounter++;
      game.currentRound.currentPlayer = game.playerTwo;

      setTimeout(function() {
        domUpdates.resetAnswerBoard();
      },2000)
      setTimeout(function() {
        game.currentRound.startFastMoneyTurn(game);
        domUpdates.populateQuestionsAndAnswers(game.currentRound);
      }, 3500);

    } else if (!game.currentRound.currentSurveyAnswers.length && game.roundCounter === 3) {
      game.endGame();
    }
  }

  timeoutEndTurn(game) {
    if (game.roundCounter < 3) {
      game.roundCounter++;
      domUpdates.resetAnswerBoard();
    domUpdates.populateQuestionsAndAnswers(game.currentRound);
    game.currentRound.startFastMoneyTurn();
    }
    else {
      game.endGame();
    }
  }
}

export default FastMoneyTurn;