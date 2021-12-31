function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
	const randomNum = Math.floor(Math.random()*(rangeEnd - rangeStart))

	return rangeStart + randomNum;
}

console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`)
