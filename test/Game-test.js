import Game from '../src/Game.js';
import Round from '../src/Round.js';
import Player from '../src/Player.js';
import data from '../src/dataset.js'
import chai from 'chai';
const expect = chai.expect;

let game = new Game(data.surveys, data.answers)
console.log(game.allSurveys)

describe('Game', function() {



  it('should create new instances of Game', function() {
    expect(game).to.be.an.instanceOf(Game);
  });

  describe('startGame', function() {
    it('should hold on to surveys', function() {
      expect(this.surveys).to.equal(data.surveys)
    });
    it('should hold on to survey answers', function() {
      expect(this.answers).to.equal(data.answers)
    });
    it('should start a round', function() {
      expect(game.startRound()).to.be.a('function');
      expect(round).to.be.an.instanceOf(Round);
    });
    it('should instantiate two players', function() {
      game.startRound();
      expect(game.playerOne).to.be.an.instanceOf(Player);
      expect(game.playerTwo).to.be.an.instanceOf(Player)
    });
  });
  it('should pick 3 random surveys and their answers', function() {
    expect(game.pickSurveys().length).to.equal(3)
  });
  it('should determine winner at end of game', function() {
    expect(game.endGame()).to.equal(playerOne)
  })  
 
  
});