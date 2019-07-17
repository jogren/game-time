import Game from '../src/Game.js';
import Round from '../src/Round.js';
import Player from '../src/Player.js';
import data from '../src/dataset.js';
import chai from 'chai';
import domUpdates from '../src/domUpdates.js';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);

let game = new Game(data.surveys, data.answers, 'Joe', 'Sarah')

chai.spy.on(domUpdates, ['populateQuestionsAndAnswers'], () => {});

describe('Game', function() {

  it('should create new instances of Game', function() {
    expect(game).to.be.an.instanceOf(Game);
  });
  describe('startGame', function() {
    it('should hold on to all surveys', function() {
      expect(game.allSurveys).to.equal(data.surveys);
    });
    it('should hold on to all survey answers', function() {
      expect(game.allAnswers).to.equal(data.answers);
    });
    it('should fire populateQuestionsAndAnswers to update DOM', function() {
      game.startGame();
      expect(domUpdates.populateQuestionsAndAnswers).to.have.been.called(1)
    });
    it('should instantiate two players', function() {
      game.startGame();
      expect(game.playerOne).to.be.an.instanceOf(Player);
      expect(game.playerTwo).to.be.an.instanceOf(Player);
    });
  });
  it('should pick 3 random surveys and their answers', function() {
    expect(game.pickSurveys().length).to.equal(3);
  });
  describe('endGame()', function() {
    it('should determine winner at end of game', function() {
      game.playerOne.score = 400;
      expect(game.endGame()).to.equal(game.playerOne);
    });
    it('should be able to check if there is a tie', function() {
      game.playerTwo.score = 400;
      expect(game.endGame()).to.equal('It\'s a tie!');
    })  
  }) 
});