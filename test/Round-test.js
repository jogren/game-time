import data from '../src/dataset.js';
import chai from 'chai';
// import spies from 'chai-spies';
import Round from '../src/Round.js';
import Player from '../src/Player.js';
import Turn from '../src/Turn.js';

<<<<<<< HEAD
=======

>>>>>>> master
const expect = chai.expect;
// const spy = chai.spy();

let testSurveys, testAnswers, currentRound, playerOne;


describe('Round', function() {

	beforeEach(function() {
		testSurveys = data.surveys.filter(survey => survey.id < 4);
		testAnswers = data.answers.filter(answer => testSurveys.some(survey => survey.id === answer.surveyId));
		currentRound = new Round(testSurveys, testAnswers);
		playerOne = new Player();
	});

	it('should be a function', function() {
		expect(Round).to.be.a('function');
	});

	it('should be an instance of User', function() {
		expect(currentRound).to.be.an.instanceOf(Round);
	});

	describe('startRound', function() {
		// it('should start a new Turn', function() {
		// 	spy.on(currentRound.startRound()).to.
		// });

		it('should return the current survey question', function() {
			expect(currentRound.startRound()).to.eql({ id: 1, question: 'If You Drew Homer Simpson’s Name In A Secret Santa Exchange, What Would You Buy Him?' });
			currentRound.endRound();
			expect(currentRound.startRound()).to.eql({ id: 2, question: 'Name Something You Do To An Item Before Giving It As A Gift' })
		});
	});


	describe('endRound', function() {
		it('should increment the counter', function() {
			expect(currentRound.counter).to.equal(0);
			currentRound.endRound();
			expect(currentRound.counter).to.equal(1)
		});

		// it('should invoke startRound if the counter is less than two', function() {
		// 	expect(currentRound.endRound()).to.eql({ id: 3, question: 'Name A Good Gift For Someone Who Is Always Late.' });
		// });
	});


})