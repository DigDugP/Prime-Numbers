/* playing around with recursion - go to: https://github.com/DigDugP/Prime-Numbers/blob/master/Prime_Page.html to try on a page */

function nextprime(currentprime){
	currentprime++;
	for	(i = 2; i < currentprime; i++){
		if (currentprime % i == 0){
			return nextprime(currentprime);
		}
	}
	return currentprime;
}
