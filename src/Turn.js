class Turn {
  constructor(game, round) {
    this.game = game;
    this.round = round;
    this.currentPlayer = this.game.playerOne;
  }

  checkGuess(guess) {
    let currentAnswers = this.round.currentSurveyAnswers.map(answerObj => answerObj.answer.toLowerCase());
    let boolean = currentAnswers.includes(guess.toLowerCase());
    if (boolean) {
      this.assignPoints(guess);
    }
    this.endTurn();
    return boolean;
  }

  assignPoints(guess) {
    let targetPoints = this.round.currentSurveyAnswers.find(obj => obj.answer.toLowerCase() === guess.toLowerCase()).respondents;
    this.currentPlayer.score += targetPoints * this.currentPlayer.multiplier;
  }

  endTurn() {
    this.currentPlayer === this.game.playerOne ? this.currentPlayer = this.game.playerTwo : this.currentPlayer = this.game.playerOne;
  }
}

export default Turn;