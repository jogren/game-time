import domUpdates from './domUpdates';

class Turn {
  constructor(game, round) {
    this.game = game;
    this.round = round;
    this.currentPlayer = this.game.playerOne;
  }

  checkGuess(guess) {
    let index = this.round.currentSurveyAnswers.findIndex(answerObj => answerObj.answer.toLowerCase() === guess.toLowerCase());
    if (index !== -1) {
      let targetAnswer = this.round.currentSurveyAnswers.splice(index, 1)[0];
      this.assignPoints(targetAnswer);
    }
    this.endTurn();
  }

  assignPoints(targetAnswer) {
    this.currentPlayer.score += targetAnswer.respondents * this.currentPlayer.multiplier;
  }

  endTurn() {
    this.currentPlayer === this.game.playerOne ? this.currentPlayer = this.game.playerTwo : this.currentPlayer = this.game.playerOne;
    if (this.round.currentSurveyAnswers.length === 0) {
      this.round.endRound();
    }
  }
}

export default Turn;