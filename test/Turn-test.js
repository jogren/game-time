import Turn from '../src/Turn.js';
import data from '../src/dataset.js';
import Player from '../src/Player.js';
import Round from '../src/Round.js'
import Game from '../src/Game.js';
import chai from 'chai';
import spies from 'chai-spies';
import domUpdates from '../src/domUpdates';

const expect = chai.expect;
chai.use(spies);

var turn, currentGame;

describe('Turn', () => {
    beforeEach(() => {
      currentGame = new Game(data.surveys, data.answers);
      turn = currentGame.currentRound.currentTurn;
      currentGame.currentRound.currentSurveyAnswers = [{ answer: 'Alarm Clock', respondents: 34, surveyId: 3 }, { answer: 'Beer', respondents: 67, surveyId: 1 }, { answer: 'Bowling Ball', respondents: 5, surveyId: 1 }]
    });
  
    chai.spy.on(domUpdates, ['flipAnswer', 'showWrongAnswer'], () => {});

    it('should be a function', () => {
      expect(Turn).to.be.a('function');
    });

  describe('checkGuess', () => {
   

    it('should fire assign points on correct guess', () => {
      chai.spy.on(turn, ['assignPoints'], () => {});
      turn.checkGuess(currentGame, 'Beer');
      expect(turn.assignPoints).to.have.been.called(1);
    });

    it('should fire endTurn on guess', () => {
      chai.spy.on(turn, ['endTurn'], () => {});
      turn.checkGuess(currentGame, 'blah');
      expect(turn.endTurn).to.have.been.called(1);
    });

    it('should fire flipAnswer on a correct guess', () => {
      turn.checkGuess(currentGame, 'beer');
      expect(domUpdates.flipAnswer).to.have.been.called(2);
    });

    it('should not assign points for incorrect guess', () => {
      turn.checkGuess(currentGame, 'blah');
      expect(currentGame.playerOne.score).to.equal(0);
    });

    it('should fire showWrongAnswer for an incorrect guess', () => {
      turn.checkGuess(currentGame, 'blah');
      expect(domUpdates.showWrongAnswer).to.have.been.called(3);
    })
  })

  describe('assignPoints', () => {
    it('should assign points for correct guess', () => {
      turn.assignPoints(currentGame, { answer: 'Alarm Clock', respondents: 34, surveyId: 3 });
      expect(currentGame.playerOne.score).to.equal(34);
    });



  })

  describe('endTurn', () => {
    it('should toggle player after guess', () => {
      expect(currentGame.currentRound.currentPlayer).to.eql(currentGame.playerOne);
      turn.endTurn(currentGame);
      expect(currentGame.currentRound.currentPlayer).to.eql(currentGame.playerTwo);
      turn.endTurn(currentGame);
      expect(currentGame.currentRound.currentPlayer).to.eql(currentGame.playerOne);
    });
  })
})