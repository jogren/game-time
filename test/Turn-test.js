import Turn from '../src/Turn.js';
import data from '../src/dataset.js';
import Player from '../src/Player.js'
import chai from 'chai';
const expect = chai.expect;

describe('Turn', () => {

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should check guess and return an answer', () => {
    const turn = new Turn();
    expect(turn.checkGuess('Beer')).to.equal(true);
  });

  it('should ')
})

