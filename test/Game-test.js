import Game from '../src/Game.js';
import Round from '../src/Round.js';
import Player from '../src/Player.js';
import data from '../src/dataset.js';
import chai from 'chai';
import domUpdates from '../src/domUpdates.js';
const expect = chai.expect;
import spies from 'chai-spies';
chai.use(spies);

const spy = chai.spy();

let game = new Game(data.surveys, data.answers, 'Joe', 'Sarah')


describe('Game', function() {
chai.spy.on(domUpdates, ['showCurrentPlayer', 'populateQuestionsAndAnswers', 'handleEndGameAnimation'], () => {});
  it('should create new instances of Game', function() {
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should hold on to all surveys', function() {
    expect(game.allSurveys).to.equal(data.surveys);
  });

  it('should hold on to all survey answers', function() {
    expect(game.allAnswers).to.equal(data.answers);
  });

  it('should store a new instance of round', function() {
    expect(game.currentRound).to.be.an.instanceOf(Round);
  });
 
  it('should instantiate two players', function() {
    expect(game.playerOne).to.be.an.instanceOf(Player);
    expect(game.playerTwo).to.be.an.instanceOf(Player);
  });

  describe('pickSurveys', function() {
    it('should pick 4 random surveys and their answers', function() {
      expect(game.pickSurveys().length).to.equal(4);
    })
  });

  describe('pickAnswers', function() {
    it('should find 3 matching answers for each of the chosen surveys', function() {
      expect(game.pickAnswers().length).to.equal(12);
    });
  });

  describe('setCurrentRoundAnswers', function() {
    it('should find 3 matching answers for current survey', function() {
      expect(game.currentSurveys[game.roundCounter].surveyId).to.equal(game.setCurrentRoundAnswers()[0].id)
      expect(game.setCurrentRoundAnswers().length).to.equal(3);
    });
  });

  describe('startGame', function() {
    it('should fire populateQuestionsAndAnswers to update DOM', function() {
      let game2 = new Game(data.surveys, data.answers, 'David', 'Jacob')
      game2.startGame();
      expect(domUpdates.populateQuestionsAndAnswers).to.have.been.called(1)
    });
    it('should fire showCurrentPlayer', function() {
      game.startGame();
      expect(domUpdates.showCurrentPlayer).to.have.been.called(6)
    })
  })

  describe('startNewRound', function() {
    it('should create a new instance of Round', function() {
      let round0 = game.currentRound
      game.startNewRound();
      let round1 = game.currentRound;
      expect(round1).to.not.equal(round0)
    })
  })

  describe('endGame', function() {
    it('should determine winner at end of game', function() {
      game.playerOne.score = 400;
      expect(game.endGame()).to.equal(game.playerOne);
    });

    it('should be able to check if there is a tie', function() {
      game.playerTwo.score = 400;
      expect(game.endGame()).to.equal('It\'s a tie!');
    }); 
    it('should trigger animation at end of game', function() {
      let game3 = new Game(data.surveys, data.answers, 'David', 'Jacob')
      game3.playerTwo.score = 400;
      game3.endGame();
      expect(domUpdates.handleEndGameAnimation).to.have.been.called(2);
    });
  }) 
});