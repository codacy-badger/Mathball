const assert = require('assert'),
	max = require('../src/max');

describe('[Function: max]', () => {

	it('should be a function', () => {
		assert.strictEqual(typeof max, 'function');
	});

	it('should return a number when an array of number is passed', () => {
		assert.strictEqual(typeof max([1, 1]), 'number');
	});

	it('should return \'72\' when \'[45, -5, 72, 10]\' is passed', () => {
		assert.strictEqual(max([45, -5, 72, 10]), 72);
	});

	it('should return \'42\' when \'[-10, 0, 41, 42]\' is passed', () => {
		assert.strictEqual(max([-10, 0, 41, 42]), 42);
	});

});
