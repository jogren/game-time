import domUpdates from './domUpdates';

class Turn {
  constructor(game, round) {
    this.game = game;
    this.round = round;
    this.currentPlayer = this.game.playerOne;
  }

  checkGuess(guess) {
    let index = this.game.currentRound.currentSurveyAnswers.findIndex(answerObj => answerObj.answer.toLowerCase() === guess.toLowerCase());
    console.log(this.game.currentRound.currentSurveyAnswers)
    if (index !== -1) {
      let targetAnswer = this.game.currentRound.currentSurveyAnswers.splice(index, 1)[0];
      this.assignPoints(targetAnswer);
    }
    this.endTurn();
  }

  assignPoints(targetAnswer) {
    this.currentPlayer.score += targetAnswer.respondents * this.currentPlayer.multiplier;
  }

  endTurn() {
    this.currentPlayer === this.game.playerOne ? this.currentPlayer = this.game.playerTwo : this.currentPlayer = this.game.playerOne;
    if (this.game.currentRound.currentSurveyAnswers.length === 0) {
      this.round.endRound();
    }
  }
}

export default Turn;