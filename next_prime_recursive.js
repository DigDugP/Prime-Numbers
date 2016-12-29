/* 
Playing around with recursion - To see in action go to: 
http://htmlpreview.github.com/?https://github.com/DigDugP/Prime-Numbers/blob/master/primes.html 
*/

function nextprime(currentprime){
	currentprime++;
	for	(i = 2; i < currentprime; i++){
		if (currentprime % i == 0){
			return nextprime(currentprime);
		}
	}
	return currentprime;
}
