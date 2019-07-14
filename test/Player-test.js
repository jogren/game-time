import Player from '../src/Player.js';
import chai from 'chai';
import data from '../src/dataset.js';
const expect = chai.expect;

describe('Player', () => {

  it('should be a function', () => {
    expect(Player).to.be.a('function');
  });

  it('should accept a name', () => {
    const player = new Player('John');
    expect(player.name).to.equal('John');
  });

  it('should instantiate a player with zero points', () => {
    const player = new Player('John');
    expect(player.score).to.equal(0);
  });
})