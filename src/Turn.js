class Turn {
  constructor() {
    this.currentPlayer = currentGame.currentPlayer;
  }

  handleCorrectGuess(guess) {
    // round.surveys = round.surveys.filter(return !survey.answer === guess);
    // assignPoints()
  }

  assignPoints(guess) {
    checkGuess() ? this.currentPlayer.points
    // checkGuess() ? this.currentPlayer.points += (correctAnswerObject(?).respondents * multiplier);
  }

  checkGuess(guess) {
    let newGuess = guess.toLowerCase();
    let currentAnswers = round.currentSurveyAnswers.map(answer => answer.answer.toLowerCase())
    let boolean = currentAnswers.includes(guess);
    if (boolean) {
      this.handleCorrectGuess();
    }
    this.endTurn();
    return boolean;
    // let boolean = blahblah conditional checking answer
    //   true? handleCorrectGuess()
    //   endTurn();
    //   return boolean so we can manipulate dom appropriately;
  }

  startTurn() {

  }

  endTurn() {
    this.currentPlayer === playerOne ? this.currentPlayer = playerTwo : this.currentPlayer = playerOne;
  }
}

export default Turn;