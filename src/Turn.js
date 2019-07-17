import domUpdates from './domUpdates';

class Turn {
  constructor(game) {
    this.currentPlayer = game.playerOne;
  }

  checkGuess(game, guess) {
    let index = game.currentRound.currentSurveyAnswers.findIndex(answerObj => answerObj.answer.toLowerCase() === guess.toLowerCase());
    if (index !== -1) {
      let targetAnswer = game.currentRound.currentSurveyAnswers.splice(index, 1)[0];
      this.assignPoints(targetAnswer);
    }
    this.endTurn(game);
  }

  assignPoints(targetAnswer) {
    this.currentPlayer.score += targetAnswer.respondents * this.currentPlayer.multiplier;
  }

  endTurn(game) {
    this.currentPlayer === game.playerOne ? this.currentPlayer = game.playerTwo : this.currentPlayer = game.playerOne;
    if (game.currentRound.currentSurveyAnswers.length === 0) {
      game.currentRound.endRound(game);
      domUpdates.populateQuestionsAndAnswers(game.currentRound);
    }
  }
}

export default Turn;