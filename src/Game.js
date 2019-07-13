class Game {
  constructor(allSurveys, allAnswers) {
    this.allSurveys = allSurveys;
    this.allAnswers = allAnswers;
    this.currentRound;
  }

  startGame() {
    this.currentRound = new Round(pickSurveys(), pickAnswers())
  }

  pickSurveys() {
    let randomIds = [];
    for (let i = 0; i < 15; i++) {
      let randomId = Math.floor(Math.random() * Math.floor(15))
      randomIds.push(randomId)
    } 
    this.randomIdsToPickFrom = Array.from(new Set(randomIds)).slice(0, 3)

    return this.randomIdsToPickFrom.map(id => {
      return data.surveys.find(survey => survey.id === id)
    })
  }

  pickAnswers(ids) {
    return data.answers.filter(answer => {
      return this.randomIdsToPickFrom.some(id => id === answer.surveyId
      )})
  }

  endGame() {
    //determine winner
    //return winner object
  }
}


export default Game