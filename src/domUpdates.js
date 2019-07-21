import $ from 'jquery';

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
  }

}

export default domUpdates;