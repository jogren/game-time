import Turn from '../src/Turn.js';
import data from '../src/dataset.js';
import Player from '../src/Player.js';
import Round from '../src/Round.js'
import Game from '../src/Game.js';
import chai from 'chai';
import spies from 'chai-spies';
const expect = chai.expect;
chai.use(spies);

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
    it('should fire assign points on correct guess', () => {
    chai.spy.on(turn, ['assignPoints'], () => {});
      turn.checkGuess('Beer');
      expect(turn.assignPoints).to.have.been.called(1);
    })

    it('should fire endTurn on guess', () => {
    chai.spy.on(turn, ['endTurn'], () => {});
      turn.checkGuess('blah');
      expect(turn.endTurn).to.have.been.called(1);
    })

    it('should assign points for correct guess', () => {
      turn.checkGuess('beer');
      expect(currentGame.playerOne.score).to.equal(67);
    });

    it('should not assign points for incorrect guess', () => {
      turn.checkGuess('blah');
      expect(currentGame.playerOne.score).to.equal(0);
    })
  })

  describe('assignPoints', () => {
    it('should assign points for correct guess', () => {
      turn.assignPoints({ answer: 'Alarm Clock', respondents: 34, surveyId: 3 });
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
})