import $ from 'jquery';
import ConfettiGenerator from "confetti-js";

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

  handleEndGameAnimation(winner) {
    $('.game-display').addClass("end-game");
    $('.section--players').addClass("end-game")
    $('.winner-page').append(`
      <h4>${winner.name} has won the game!</h4>
      <button class="restart-game" id="restart-game" onClick="">Play Again!</button>
      <canvas id="my-canvas"></canvas>`)
    $('#restart-game').on('click', () => {
      this.startNewGame();
    });
    var confettiSettings = { target: 'my-canvas', size: 3, rotate: true, type: "png", src: "../images/steve-harvey-face.png" };
    var confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
  },

  startNewGame() {
    window.location.reload();
  }
}

export default domUpdates;