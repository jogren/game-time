import data from '../src/dataset.js';
import chai from 'chai';
// import spies from 'chai-spies';
import Game from '../src/Game.js';
import Round from '../src/Round.js';
import Player from '../src/Player.js';
import Turn from '../src/Turn.js';

const expect = chai.expect;
// const spy = chai.spy();

let currentGame = new Game(data.surveys, data.answers);
currentGame.startGame();
let currentRound = currentGame.currentRound;

describe('Round', function() {

	// beforeEach(function() {
		// testSurveys = data.surveys.filter(survey => survey.id < 4);
		// testAnswers = data.answers.filter(answer => testSurveys.some(survey => survey.id === answer.surveyId));
	
	// });

	// it('should be a function', function() {
	// 	expect(currenGam).to.be.a('function');
	// });

	it('should be an instance of Round', function() {
		expect(currentGame.currentRound).to.be.an.instanceOf(Round);
	});

	describe('startRound', function() {
		// it('should start a new Turn', function() {
		// 	spy.on(currentRound.startRound()).to.
		// });

		it('should return the current survey question', function() {
			expect(currentRound.surveys[0].id).to.eql(currentGame.gameIds[0]);
			currentRound.endRound();
			expect(currentRound.surveys[1].id).to.eql(currentGame.gameIds[1])
		});
	});


	describe('endRound', function() {
		it('should increment the counter', function() {
			let anotherGame = new Game(data.surveys, data.answers);
			anotherGame.startGame();
			let anotherRound = anotherGame.currentRound
			expect(anotherRound.counter).to.equal(0);
			anotherRound.endRound();
			expect(anotherRound.counter).to.equal(1)
		});

		// it('should invoke startRound if the counter is less than two', function() {
		// 	expect(currentRound.endRound()).to.eql({ id: 3, question: 'Name A Good Gift For Someone Who Is Always Late.' });
		// });
	});


})