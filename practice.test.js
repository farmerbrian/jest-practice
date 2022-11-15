// const capitalize = require('./practice.js');
import { capitalize } from './practice.js';

const reverseString = require('./practice.js');
const calculator = require('./practice.js');
const ceaserCipher = require('./practice.js');
const analyzeArray = require('./practice.js');

test('banana should be Banana', () => {
	expect(capitalize('banana')).toBe('Banana');
});
