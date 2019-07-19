import FastMoneyTurn from '../src/FastMoneyTurn.js';
import data from '../src/dataset.js';
import Game from '../src/Game.js';
import domUpdates from '../src/domUpdates.js';
import chai from 'chai';
import spies from 'chai-spies';
const expect = chai.expect;
chai.use(spies);

let fastMoneyTurn, currentRound, currentGame;

chai.spy.on(domUpdates, ['populateQuestionsAndAnswers'], () => {});

beforeEach(() => {
  fastMoneyTurn = new FastMoneyTurn();
  currentGame = new Game(data.surveys, data.answers);
  currentRound = currentGame.currentRound;
  currentGame.currentRound.currentSurveyAnswers = [];
});

describe('FastMoneyTurn', function() {
  it('should be an instance of FastMoneyTurn', function() {
    expect(fastMoneyTurn).to.be.an.instanceOf(FastMoneyTurn);
  });

  describe('endTurn', () => {
    it('should increment the roundCounter after a turn is over', () => {
      currentGame.roundCounter = 2;
      fastMoneyTurn.endTurn(currentGame);
      expect(currentGame.roundCounter).to.equal(3);
    });

    it('should change the current player to playerTwo after turn is over', () => {
      currentGame.roundCounter = 2;
      fastMoneyTurn.endTurn(currentGame);
      expect(currentGame.currentRound.currentPlayer).to.equal(currentGame.playerTwo);
    });

    it('should start another fast money turn when the round counter is 2', () => {
      chai.spy.on(currentRound, ['startFastMoneyTurn'], () => {});
      currentGame.roundCounter = 2;
      fastMoneyTurn.endTurn(currentGame);
      expect(currentGame.currentRound.startFastMoneyTurn).to.have.been.called(1);
    });

    it('should populate new questions and answers at the end of a turn', () => {
      currentGame.roundCounter = 2;
      fastMoneyTurn.endTurn(currentGame);
      expect(domUpdates.populateQuestionsAndAnswers).to.have.been.called(4);
    });

    it('should run endGame when the counter is at 3', () => {
      chai.spy.on(currentGame, ['endGame'], () => {});
      currentGame.roundCounter = 3;
      fastMoneyTurn.endTurn(currentGame);
      expect(currentGame.endGame).to.have.been.called(1);
    });
  })
})
