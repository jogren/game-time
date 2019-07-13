class Turn {
  constructor() {
    this.currentPlayer = currentGame.currentPlayer;
  }

  checkGuess(guess) {
    // let newGuess = guess.toLowerCase();
    let currentAnswers = currentRound.currentSurveyAnswers.map(answer => answer.answer.toLowerCase());
    let boolean = currentAnswers.includes(guess.toLowerCase());
    if (boolean) {
      this.handleCorrectGuess(currentAnswers, guess);
    }
    this.endTurn();
    return boolean;
    // let boolean = blahblah conditional checking answer
    //   true? handleCorrectGuess()
    //   endTurn();
    //   return boolean so we can manipulate dom appropriately;
  }

  handleCorrectGuess(currentAnswers, guess) {
    let targetPoints = currentAnswers.find(answer => answer.answer === guess.toLowerCase()).respondents;
    
    // round.surveys = round.surveys.filter(return !survey.answer === guess);
    this.assignPoints(targetPoints)
  }

  assignPoints(guess) {
    this.checkGuess() ? this.currentPlayer.points += targetPoints * currentRound.multiplier;
    // checkGuess() ? this.currentPlayer.points += (correctAnswerObject(?).respondents * multiplier);
  }

  endTurn() {
    this.currentPlayer === playerOne ? this.currentPlayer = playerTwo : this.currentPlayer = playerOne;
  }

  startTurn() {

  }
}

export default Turn;