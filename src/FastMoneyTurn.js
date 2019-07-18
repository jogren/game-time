import domUpdates from './domUpdates';
import Turn from './Turn';

class FastMoneyTurn extends Turn {
  constructor() {
    super();
  }

  endTurn(game) {
    game.currentRound.currentPlayer === game.playerOne ? game.currentRound.currentPlayer = game.playerTwo : game.currentRound.currentPlayer = game.playerOne;
    if (game.currentRound.currentSurveyAnswers.length === 0 && game.roundCounter < 4) {
      game.roundCounter++;
      domUpdates.populateQuestionsAndAnswers(game.currentRound);
      game.currentRound.startFastMoneyTurn();
    } 
    else {
      game.endGame();
    }
  }

  timeoutEndTurn(game) {
    if (game.roundCounter < 4) {
      game.roundCounter++;
    domUpdates.populateQuestionsAndAnswers(game.currentRound);
    game.currentRound.startFastMoneyTurn();
    }
    else {
      game.endGame();
    }
  }
}

export default FastMoneyTurn;