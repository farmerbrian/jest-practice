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

function ceaserCipher(myString) {
	let key = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z',
	];
	let upperKey = [
		'A',
		'B',
		'C',
		'D',
		'E',
		'F',
		'G',
		'H',
		'I',
		'J',
		'K',
		'L',
		'M',
		'N',
		'O',
		'P',
		'Q',
		'R',
		'S',
		'T',
		'U',
		'V',
		'W',
		'X',
		'Y',
		'Z',
	];
	let arr = myString.split('');
	let newArr = [];
	let encodedCipher;
	function encode(arr) {
		for (let index = 0; index < arr.length; index++) {
			let newValue;
			if (arr[index].toUpperCase() === arr[index]) {
				let value = upperKey.indexOf(arr[index]);
				if (value < 1) {
					console.log('punctuation');
					newValue = arr[index];
					newArr.push(newValue);
				} else if (value > 23) {
					newValue = value - 23;
					let newLetter = upperKey[newValue];
					newArr.push(newLetter);
				} else {
					newValue = value + 3;
					let newLetter = upperKey[newValue];
					newArr.push(newLetter);
				}
			} else {
				let value = key.indexOf(arr[index]);
				if (value < 1) {
					console.log('punctuation');
					newValue = arr[index];
					// let newLetter = key[newValue];
					newArr.push(newValue);
				} else if (value > 23) {
					newValue = value - 23;
					let newLetter = key[newValue];
					newArr.push(newLetter);
				} else {
					newValue = value + 3;
					let newLetter = key[newValue];
					newArr.push(newLetter);
				}
			}

			// let newLetter = key[newValue];
			// newArr.push(newLetter);
		}
		encodedCipher = newArr.join('');
		return encodedCipher;
	}
	encode(myString);
	return encodedCipher;
}

function analyzeArray(arr) {
	// let averageResult;
	let results = {
		averageResult: '',
		minResult: '',
		maxResult: '',
		length: arr.length,
	};
	function average(array) {
		results.averageResult =
			array.reduce((a, b) => a + b) / array.length;
		return results.averageResult;
	}
	function min(array) {
		results.minResult = Math.min(...array);
		return results.minResult;
	}
	function max(array) {
		results.maxResult = Math.max(...array);
		return results.maxResult;
	}
	average(arr);
	min(arr);
	max(arr);
	return results;
}

export { capitalize };
export { reverseString };
export { calculator };
export { ceaserCipher };
export { analyzeArray };
