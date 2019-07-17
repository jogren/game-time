import $ from 'jquery';

let domUpdates = {

  populateQuestionsAndAnswers(round) {
    $('#survey-question').text(round.currentSurvey.question);
    round.currentSurveyAnswers.sort((a,b) => b.respondents - a.respondents);
    $('#answer-one').text(round.currentSurveyAnswers[0].answer);
    $('#answer-two').text(round.currentSurveyAnswers[1].answer);
    $('#answer-three').text(round.currentSurveyAnswers[2].answer);
  },

<<<<<<< Updated upstream
  handleGuess(game) {
    game.currentRound.currentTurn.checkGuess(game, $('#player-answer').val());
    $('#player-answer').val('');
    console.log(game.currentRound.currentSurveyAnswers.length)
  },

  reassignPlayerName(e, game) {
    if(e.target.id === 'player-one-name-button') {
      game.playerOne.name = $('#player-one-name').val();
    } else {
      game.playerTwo.name = $('#player-two-name').val();
    }
=======
  handleGuess(turn) {
    turn.checkGuess($('#player-answer').val());
    $('#player-answer').val('');
  },

  reassignPlayerName(game) {
      game.playerOne.name = $('#player-one-name').val();
      game.playerTwo.name = $('#player-two-name').val();
>>>>>>> Stashed changes
  }

}

export default domUpdates;