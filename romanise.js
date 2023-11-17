const numerals = {
    M: 1000,
    D: 500,
    C: 100,
	L: 50,
	X: 10,
	V: 5,
	I: 1,
};

function romanise(num) {
	let result = "";
	while (num > 0) {
		for (let i = 0; i in Object.keys(numerals); i++) {
			let thisOrdinal = Object.keys(numerals)[i];
			let nextOrdinal =
				numerals[thisOrdinal].toString()[0] === "5"
					? Object.keys(numerals)[i + 1]
					: Object.keys(numerals)[i + 2];

			if (num - numerals[thisOrdinal] >= 0) {
				result = result + thisOrdinal;
				num -= numerals[thisOrdinal];
				break;
			} else if (num - (numerals[thisOrdinal] - numerals[nextOrdinal]) >= 0) {
				result = result + nextOrdinal + thisOrdinal;
				num -= numerals[thisOrdinal] - numerals[nextOrdinal];
				break;
			}
		}
	}
	return result;
}