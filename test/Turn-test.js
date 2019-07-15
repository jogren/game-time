import Turn from '../src/Turn.js';
import data from '../src/dataset.js';
import Player from '../src/Player.js';
import Round from '../src/Round.js'
import Game from '../src/Game.js';
import chai from 'chai';
import spies from 'chai-spies';
chai.use(spies);
const expect = chai.expect;

chai.spy.on(Turn, ['assignPoints', 'endTurn'], () => {});

let turn, currentGame, currentRound;

describe('Turn', () => {
  beforeEach(() => {
    currentGame = new Game(data.surveys, data.answers);
    currentGame.startGame();
    currentRound = currentGame.currentRound;
    currentRound.startRound();
    turn = currentRound.startTurn();
    currentRound.currentSurveyAnswers = [{ answer: 'Alarm Clock', respondents: 34, surveyId: 3 }, { answer: 'Beer', respondents: 67, surveyId: 1 }, { answer: 'Bowling Ball', respondents: 5, surveyId: 1 }]
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  describe('checkGuess', () => {
    it('should check guess and return an answer', () => {
      expect(turn.checkGuess('Beer')).to.equal(true);
    });

    it('should not assign points for incorrect guess', () => {
      turn.checkGuess('blah');
      expect(turn.currentPlayer.score).to.equal(0);
    })
  })

  describe('assignPoints', () => {
    it('should assign points for correct guess', () => {
      turn.assignPoints('alarm clock');
      expect(currentGame.playerOne.score).to.equal(34);
    })
  })

  describe('endTurn', () => {
    it('should toggle player after guess', () => {
      expect(turn.currentPlayer).to.eql(currentGame.playerOne);
      turn.endTurn();
      expect(turn.currentPlayer).to.eql(currentGame.playerTwo);
      turn.endTurn();
      expect(turn.currentPlayer).to.eql(currentGame.playerOne);
    })
  })

  it.skip('should fire assign points on correct guess', () => {
    turn.checkGuess('Beer');
    expect(turn.assignPoints).to.have.been.called(1);
  })
})