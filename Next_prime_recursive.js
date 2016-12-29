function nextprime(currentprime){
	currentprime++;
	for	(i = 2; i < currentprime; i++){
		if (currentprime % i == 0){
			return nextprime(currentprime);
		}
	}
	return currentprime;
}
