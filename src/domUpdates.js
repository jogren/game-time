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
    if (game.currentPlayer = game.playerOne) {
      $('player-one').toggle('.current-turn')
    }
    $('#player-answer').val('');
    $('#player-one span').text(game.playerOne.name);
    $('#player-two span').text(game.playerTwo.name);
    $('#player-one-name').text(game.playerOne.name);
    $('#player-two-name').text(game.playerTwo.name)
    $('#player-one-points').text(game.playerOne.score);
    $('#player-two-points').text(game.playerTwo.score);
  },

  reassignPlayerName(game) {
    game.playerOne.name = $('#player-one-name').val();
    game.playerTwo.name = $('#player-two-name').val();
  },

  handleHidingAndShowingElements() {
    $('#player-answers').show();
    $('#start-game-button, #player-one-name, #player-two-name, label').hide();
  },

  
  flipAnswer(guess) {
    if ($('output#answer-one').val().toLowerCase() === guess.toLowerCase()) {
      $('.answer-container-1').addClass('is-flipped')
    }
    if ($('output#answer-two').val().toLowerCase() === guess.toLowerCase()) {
      $('.answer-container-2').addClass('is-flipped')
    }
    if ($('output#answer-three').val().toLowerCase() === guess.toLowerCase()) {
      $('.answer-container-3').addClass('is-flipped')
    }
  },

  resetAnswerBoard() {
    $('span').text('')
    $('.answer-container-1, .answer-container-2, .answer-container-3').removeClass('is-flipped');
  }
}

export default domUpdates;