import { capitalize } from './practice.js';
import { reverseString } from './practice.js';
import { calculator } from './practice.js';

const ceaserCipher = require('./practice.js');
const analyzeArray = require('./practice.js');

test('banana should be Banana', () => {
	expect(capitalize('banana')).toBe('Banana');
});

test('banana should be ananab', () => {
	expect(reverseString('banana')).toBe('ananab');
});

test('2 + 3 should be 5', () => {
	expect(calculator.add(2, 3)).toBe(5);
});
test('3 - 2 should be 1', () => {
	expect(calculator.subtract(3, 2)).toBe(1);
});
test('9 / 3 should be 3', () => {
	expect(calculator.divide(9, 3)).toBe(3);
});
test('2 * 3 should be 6', () => {
	expect(calculator.multiply(2, 3)).toBe(6);
});
