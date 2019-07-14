import Turn from '../src/Turn.js';
import data from '../src/dataset.js';
import Player from '../src/Player.js';
import Round from '../src/Round.js'
import chai from 'chai';
const expect = chai.expect;

let turn, testSurveys, testAnswers, currentRound;

beforeEach(() => {
  testSurveys = data.surveys.filter(survey => survey.id < 4);
  testAnswers = data.answers.filter(answer => testSurveys.some(survey => survey.id === answer.surveyId));
  currentRound = new Round(testSurveys, testAnswers);
  turn = currentRound.startTurn();
});

describe('Turn', () => {
  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should check guess and return an answer', () => {
    expect(turn.checkGuess('Beer')).to.equal(true);
  });

  it.skip('should assign points for correct guess', () => {
    expect(turn.assignPoints('Beer')).to.equal(67);
  })

  it.skip('should assign points for correct guess', () => {
    expect(turn.endTurn('Beer')).to.equal(67);
  })
})

