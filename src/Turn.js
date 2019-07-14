class Turn {
  constructor(round) {
    this.round = round;
    // this.currentPlayer = currentGame.playerOne;
  }

  checkGuess(guess) {
    // let newGuess = guess.toLowerCase();
    let currentAnswers = this.round.currentSurveyAnswers.map(answerObj => answerObj.answer.toLowerCase());
    let boolean = currentAnswers.includes(guess.toLowerCase());
    if (boolean) {
      this.handleCorrectGuess(guess);
    }
    // this.endTurn();
    return boolean;

    // let boolean = blahblah conditional checking answer
    //   true? handleCorrectGuess()
    //   endTurn();
    //   return boolean so we can manipulate dom appropriately;
  }

  handleCorrectGuess(guess) {
    let targetPoints = this.round.currentSurveyAnswers.find(obj => obj.answer.toLowerCase() === guess.toLowerCase()).respondents;
    this.assignPoints(targetPoints)

    // round.surveys = round.surveys.filter(return !survey.answer === guess);
  }

  assignPoints() {
    this.currentPlayer.points += targetPoints * currentPlayer.multiplier;

    // checkGuess() ? this.currentPlayer.points += (correctAnswerObject(?).respondents * multiplier);
  }

  endTurn() {
    // this.currentPlayer === currentGame.playerOne ? this.currentPlayer = currentGame.playerTwo : this.currentPlayer = currentGame.playerOne;
  }

  startTurn() {

  }
}

export default Turn;