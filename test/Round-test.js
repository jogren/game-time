import data from '../src/dataset';
import chai from 'chai';
import spies from 'chai-spies';
import Game from '../src/Game';
import Round from '../src/Round';
import Player from '../src/Player';
import Turn from '../src/Turn';
import FastMoneyTurn from '../src/FastMoneyTurn';
import domUpdates from '../src/domUpdates';

const expect = chai.expect;
const spy = chai.spy();

let currentGame, currentRound, currentTurn, currentFastMoneyTurn;

global.testGame = new Game(data.surveys, data.answers, 'David', 'Jacob');

chai.spy.on(testGame, ['startNewRound'], () => {});
chai.spy.on(domUpdates, ['showFastMoneyIntro'], () => {})

describe('Round', function() {
  beforeEach(function() {
    currentGame = new Game(data.surveys, data.answers);
    currentRound = currentGame.currentRound;
    currentTurn = new Turn();
    currentFastMoneyTurn = new FastMoneyTurn();
  });

  it('should be an instance of Round', function() {
    expect(currentRound).to.be.an.instanceOf(Round);
  });

  describe('endRound', function() {
    it('should increment the round counter', function() {
      expect(currentGame.roundCounter).to.equal(0);
      currentGame.currentRound.endRound(currentGame);
      expect(currentGame.roundCounter).to.equal(1);
      currentGame.currentRound.endRound(currentGame)
    });

    it('should invoke startNewRound if the counter is less than two', function() {
      currentRound.endRound(testGame);
      expect(testGame.startNewRound).to.have.been.called(1);
    });

    it('should invoke startFastMoneyTurn if the counter is greater than or equal to two', function() {
      let testRound = new Round(currentGame);
      currentGame.currentRound = testRound;
      chai.spy.on(testRound, ['startFastMoneyTurn'], () => {});
      testRound.endRound(currentGame);
      testRound.endRound(currentGame);
      expect(testRound.startFastMoneyTurn).to.have.been.called(1);
    });
  });

  describe('startTurn', function() {
    it('should store and return a new instance of Turn', function() {
      currentRound.startTurn(); 
      expect(currentRound.currentTurn).to.be.an.instanceOf(Turn);
    });
  });

  describe('startFastMoneyTurn', function() {

    it('should invoke startNewRound', function() {
      currentRound.startFastMoneyTurn(testGame);
      expect(testGame.startNewRound).to.have.been.called(2);
    });

    it('should reassign the current turn to a new FastMoneyTurn', function() {
      currentRound.startFastMoneyTurn(testGame);
      expect(testGame.currentRound.currentTurn).to.be.an.instanceOf(FastMoneyTurn);
		});
		
		it('should fire showFastMoneyIntro', function() {
			
			let currentRound = new Round(testGame, testGame.currentSurveys[testGame.roundCounter], testGame.setCurrentRoundAnswers())
			currentRound.startFastMoneyTurn(testGame);
			expect(domUpdates.showFastMoneyIntro).to.have.been.called()
		})
  });

  describe('checkTurnCounter', function() {
    it('should switch players after each turn', function() {
      let game = new Game(data.surveys, data.answers, 'Brittany', 'Robbie');
			expect(game.currentRound.currentPlayer.name).to.equal('Brittany');
			game.turnCounter = 1;
			expect(game.currentRound.checkTurnCounter(game).name).to.equal('Robbie');
    }) 
  })

})