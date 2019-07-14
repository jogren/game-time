import Round from './Round.js';
import Player from './Player.js';

class Game {
  constructor(allSurveys, allAnswers, player1Name = 'Player 1', player2Name = 'Player 2') {
    this.allSurveys = allSurveys;
    this.allAnswers = allAnswers;
    this.gameIds;  
    this.currentRound;
    this.playerOne = new Player(player1Name)
    this.playerTwo = new Player(player2Name)
  }

  startGame() {
    this.currentRound = new Round(this.pickSurveys(), this.pickAnswers())
  }

  pickSurveys() {
    let randomIds = [];
    for (let i = 0; i < 15; i++) {
      let randomId = Math.floor(Math.random() * Math.floor(15))
      randomIds.push(randomId)
    } 
    this.gameIds = Array.from(new Set(randomIds)).slice(0, 3)

    return this.gameIds.map(id => {
      return this.allSurveys.find(survey => survey.id === id)
    })
  }

  pickAnswers(ids) {
    return this.allAnswers.filter(answer => {
      return this.gameIds.some(id => id === answer.surveyId
      )})
  }

  endGame() {
    if (this.playerOne.score === this.playerTwo.score) {
      return 'It\'s a tie!'
    }
    return this.playerOne.score > this.playerTwo.score ? this.playerOne : this.playerTwo
  }
}


export default Game