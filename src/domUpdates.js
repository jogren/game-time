import $ from 'jquery';

let domUpdates = {

  populateQuestionsAndAnswers(round) {
    $('#survey-question').text(round.currentSurvey.question);
    round.currentSurveyAnswers.sort((a,b) => b.respondents - a.respondents);
    $('#answer-one').text(round.currentSurveyAnswers[0].answer);
    $('#answer-two').text(round.currentSurveyAnswers[1].answer);
    $('#answer-three').text(round.currentSurveyAnswers[2].answer);
  },

  handleGuess(game) {
    game.currentRound.currentTurn.checkGuess(game, $('#player-answer').val());
    $('#player-answer').val('');
  },

  reassignPlayerName(game) {
    game.playerOne.name = $('#player-one-name').val();
    game.playerTwo.name = $('#player-two-name').val();
  },

  handleHidingAndShowingElements() {
    $('#player-answers').show();
    $('#start-game-button').hide();
    $('#player-one-name').hide();
    $('#player-two-name').hide();
    $('label').hide();

  }
}

export default domUpdates;