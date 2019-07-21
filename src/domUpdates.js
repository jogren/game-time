import $ from 'jquery';
import ConfettiGenerator from "confetti-js";

let domUpdates = {

  populateQuestionsAndAnswers(round, game) {
  	if(game.roundCounter < 2) {
  		$('#current-round').text(`Round ${game.roundCounter + 1}`)
  	} else {
  		$('#current-round').text(`Fast Money Round! 30`);
  	}
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

  handleTimer(timer, answersArray) {
    let interval = setInterval(() => {
      timer--;
      $('#current-round').text(`Fast Money Round! ${timer}`)
      if (timer <= 0 || !answersArray.length) {
        $('#current-round').text(`Fast Money Round! 30`);
        clearInterval(interval);
      }
    }, 1000);
  },

  handleEndGameAnimation(winner) {
    $('.game-display').addClass("end-game");
    $('.section--players').addClass("end-game")
    $('.winner-page').append(`
      <h4>${winner.name} has won the game!</h4>
      <button class="restart-game" id="restart-game">Play Again!</button>
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
  }, 

  showWrongAnswer() {
    $(".img__wrong-answer").show(0).delay(500).hide(0);
  },

}

export default domUpdates;