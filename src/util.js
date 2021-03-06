export function simulateLatency(res) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve(res);
		}, randomInt(200, 1000));
	});
}

// returns a random integer within given bounds (both inclusive)
// cf. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function randomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
