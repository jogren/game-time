import $ from 'jquery';

let domUpdates = {
  populateQuestionsAndAnswers(round) {
    $('#survey-question').text(round.currentSurvey.question);
    // round.startRound();
    round.currentSurveyAnswers.sort((a,b) => b.respondents - a.respondents);
    $('#answer-one').text(round.currentSurveyAnswers[0].answer);
    $('#answer-two').text(round.currentSurveyAnswers[1].answer);
    $('#answer-three').text(round.currentSurveyAnswers[2].answer);
  },

  handleGuess(turn) {
    turn.checkGuess($('#player-answer').val());
    $('#player-answer').val('');
    console.log(turn.game.currentRound.currentSurveyAnswers.length  )
    if(turn.game.currentRound.currentSurveyAnswers.length === 3) {
      this.populateQuestionsAndAnswers(turn.game.currentRound);  
    }
  },

  reassignPlayerName(e, currentGame) {
    if(e.target.id === 'player-one-name-button') {
      currentGame.playerOne.name = $('#player-one-name').val();
    } else {
      currentGame.playerTwo.name = $('#player-two-name').val();
    }
  }
}

export default domUpdates;