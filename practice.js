function capitalize(myString) {
	return myString.charAt(0).toUpperCase() + myString.slice(1);
}

function reverseString(myString) {
	return myString.split('').reverse().join('');
}

let calculator = {
	add: function (a, b) {
		return a + b;
	},
	subtract: function (a, b) {
		return a - b;
	},
	divide: function (a, b) {
		return a / b;
	},
	multiply: function (a, b) {
		return a * b;
	},
};

function ceaserCipher(myString) {}

function analyzeArray(arr) {}

export { capitalize };
export { reverseString };
export { calculator };
