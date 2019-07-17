import data from '../src/dataset.js';
import chai from 'chai';
import spies from 'chai-spies';
import Game from '../src/Game.js';
import Round from '../src/Round.js';
import Player from '../src/Player.js';
import Turn from '../src/Turn.js';

const expect = chai.expect;
const spy = chai.spy();

let currentGame = new Game(data.surveys, data.answers);
currentGame.startGame();

describe('Round', function() {

	// beforeEach(function() {
		// testSurveys = data.surveys.filter(survey => survey.id < 4);
		// testAnswers = data.answers.filter(answer => testSurveys.some(survey => survey.id === answer.surveyId));
	// });

	it('should be an instance of Round', function() {
		expect(currentGame.currentRound).to.be.an.instanceOf(Round);
	});

	describe('endRound', function() {
		it('should increment the round counter', function() {
			expect(currentGame.roundCounter).to.equal(0);
			currentGame.currentRound.endRound(currentGame);
			expect(currentGame.roundCounter).to.equal(1);
			currentGame.currentRound.endRound(currentGame)
		});

		it('should invoke startNewRound if the counter is less than two', function() {

			//add a spy here
		});
	});


})