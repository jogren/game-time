import Turn from '../src/Turn.js';
import data from '../src/dataset.js';
import Player from '../src/Player.js';
import Round from '../src/Round.js'
import Game from '../src/Game.js';
import chai from 'chai';
const expect = chai.expect;

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

  it('should check guess and return an answer', () => {
    expect(turn.checkGuess('Beer')).to.equal(true);

  });

  it('should assign points for correct guess', () => {
    turn.checkGuess('alarm clock');
    expect(currentGame.playerOne.score).to.equal(34);
  })

  it('should not assign points for incorrect guess', () => {
    turn.checkGuess('blah');
    expect(turn.currentPlayer.score).to.equal(0);
  })

  it('should toggle player after guess', () => {
    expect(turn.currentPlayer).to.eql(currentGame.playerOne);
    turn.checkGuess('blah');
    expect(turn.currentPlayer).to.eql(currentGame.playerTwo);
  })
})

