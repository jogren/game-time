import domUpdates from './domUpdates';
import Turn from './Turn';
let timeoutId;

class FastMoneyTurn extends Turn {
  constructor() {
    super();
    this.guessCount = 0;
  }

  checkGuess(game, guess) { 
    if (this.guessCount === 0) {
      this.timeTurn(game);
    }
    this.guessCount++;
    let index = game.currentRound.currentSurveyAnswers.findIndex(answerObj => answerObj.answer.toLowerCase() === guess.toLowerCase());
    if (index !== -1) {
      let targetAnswer = game.currentRound.currentSurveyAnswers.splice(index, 1)[0];
      this.assignPoints(game, targetAnswer);
    }
    this.endTurn(game);
  }


  endTurn(game) {
    if (!game.currentRound.currentSurveyAnswers.length && game.roundCounter === 2) {
      clearTimeout(timeoutId);
      game.roundCounter++;
      game.currentRound.startFastMoneyTurn(game);
      super.switchPlayer(game)
      domUpdates.populateQuestionsAndAnswers(game.currentRound, game);
    } else if (!game.currentRound.currentSurveyAnswers.length && game.roundCounter === 3) {
      clearTimeout(timeoutId);
      game.endGame();
    }
  }

//   endTurn(game) {
//     console.log('firing fast money turn end turn')
//     let timer = 30;
//     domUpdates.handleTimer(timer, game.currentRound.currentSurveyAnswers)
//     setTimeout(() => {
//     console.log('timeout!')
//     if (game.roundCounter === 2) {
//       game.roundCounter++;
//       game.currentRound.startFastMoneyTurn(game);
//       super.switchPlayer(game)
//       // game.currentRound.currentPlayer = game.playerTwo;
//       domUpdates.populateQuestionsAndAnswers(game.currentRound, game);
//     } else if (game.roundCounter === 3) {
//       game.endGame();
//     }
//   }, 30000);
// }

  timeTurn(game) {
      let timer = 30;
      domUpdates.handleTimer(timer, game.currentRound.currentSurveyAnswers)
      timeoutId = setTimeout(() => {
      console.log('timeout!')
      if (game.roundCounter === 2) {
        game.roundCounter++;
        game.currentRound.startFastMoneyTurn(game);
        super.switchPlayer(game)
        // game.currentRound.currentPlayer = game.playerTwo;
        domUpdates.populateQuestionsAndAnswers(game.currentRound, game);
      } else if (game.roundCounter === 3) {
        game.endGame();
      }
    }, 30000)
  }

}

export default FastMoneyTurn;