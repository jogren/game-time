import domUpdates from './domUpdates';
import Turn from './Turn';

class FastMoneyTurn extends Turn {
  constructor() {
    super();
  }

  endTurn(game) {
    console.log('fast money end turn', game.currentRound, game.currentRound.currentPlayer)
    if (game.currentRound.currentSurveyAnswers.length === 0 && game.roundCounter === 2) {
      console.log('I made it in here');
      console.log('fast money round check', game.currentRound)
      game.roundCounter++;
      game.currentRound.startFastMoneyTurn(game);
      game.currentRound.currentPlayer = game.playerTwo;
      domUpdates.populateQuestionsAndAnswers(game.currentRound);
    } else if (game.currentRound.currentSurveyAnswers.length === 0 && game.roundCounter === 3) {
      console.log('endgame')
      game.endGame();
    }
  }

  timeoutEndTurn(game) {
    if (game.roundCounter < 3) {
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