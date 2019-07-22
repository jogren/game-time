import $ from 'jquery';
import ConfettiGenerator from "confetti-js";

let domUpdates = {

  populateQuestionsAndAnswers(game) {
  	if(game.roundCounter < 2) {
  		$('#current-round').text(`Round ${game.roundCounter + 1}`)
  	} else {
  		$('#current-round').html(`Fast Money Round! <br> 
        <span class="fast-money-timer">30</span>`);
  	}
    $('#survey-question').text(game.currentRound.currentSurvey.question);
    game.currentRound.currentSurveyAnswers.sort((a,b) => b.respondents - a.respondents);
    $('#answer-one').text(game.currentRound.currentSurveyAnswers[0].answer);
    $('#answer-two').text(game.currentRound.currentSurveyAnswers[1].answer);
    $('#answer-three').text(game.currentRound.currentSurveyAnswers[2].answer);    
  },

  handleGuess(game) {
    game.currentRound.currentTurn.checkGuess(game, $('#player-answer').val());
    if (game.currentPlayer = game.playerOne) {
      // $('player-one').toggle('.current-turn')
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
    $('#start-game-button, input#player-one-name, input#player-two-name, label').hide();
  },
  
  flipAnswer(guess, answers) {
    if ($('output#answer-one').val().toLowerCase() === guess.toLowerCase()) {
      $('#answer-one').html(`<div class="answers-and-respondents"><span>${answers[0].answer}</span> <span>${answers[0].respondents}</span></div>`);
      $('.answer-container-1').addClass('is-flipped')
    }
    if ($('output#answer-two').val().toLowerCase() === guess.toLowerCase()) {
      $('#answer-two').html(`<div class="answers-and-respondents"><span>${answers[1].answer}</span> <span>${answers[1].respondents}</span></div>`);
      $('.answer-container-2').addClass('is-flipped')
    }
    if ($('output#answer-three').val().toLowerCase() === guess.toLowerCase()) {
      $('#answer-three').html(`<div class="answers-and-respondents"><span>${answers[2].answer}</span> <span>${answers[2].respondents}</span></div>`);
      $('.answer-container-3').addClass('is-flipped')
    }
  },

  resetAnswerBoard() {
    $('.answer-container-1, .answer-container-2, .answer-container-3').removeClass('is-flipped');
  },

  handleTimer(timer, answersArray) {
    let interval = setInterval(() => {
      timer--;
      $('#current-round').html(`Fast Money Round! <br> 
        <span class="fast-money-timer">${timer}</span>`)
      if (timer <= 0 || !answersArray.length) {
        $('#current-round').html(`Fast Money Round! <br> <span class="fast-money-timer">30</span>`);
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

  showCurrentPlayer(game, player) {
    if(player === game.playerOne) {
      $('#player-one').addClass('current-turn');
      $('#player-two').removeClass('current-turn');
    } else {
      $('#player-two').addClass('current-turn');
      $('#player-one').removeClass('current-turn');

    }
  }

}

export default domUpdates;