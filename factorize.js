function nextprime(currentprime){
	currentprime++;
	for	(i = 2; i < currentprime; i++){
		if (currentprime % i == 0){
			return nextprime(currentprime);
		}
	}
	return currentprime;
}

function factorize(innumber){
	var answerarea = document.getElementById('factoranswer');
	var currentprime = 2;
	answerarea.innerHTML += "Prime factorization for " + innumber + ": ";
	while (innumber > 1){
		if (innumber % currentprime == 0){
			answerarea.innerHTML += currentprime;
			innumber = innumber / currentprime;
			if (innumber > 1){
				answerarea.innerHTML += ", ";
			}
		} else {
			currentprime = nextprime(currentprime);
		}
	}
	answerarea.innerHTML += "</br>"
}
