
	 	var computerChoices = "abcdefghijklmnopqrstuvwxyz".split("")

	 	var wins = 0;
	 	var losses = 0;
	 	var guesses = 9;

	 	var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	 	console.log(computerGuess);

	 	//reset game
	 	function newGame() {
	 		guesses = 9;
	 		//guesses back up to 9
 			computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
 			console.log(computerGuess);
	 		//call new letter
	 		document.querySelector('#g_sofar').innerHTML = "";
	 		//clear guesses so far
	 	}

	
		// Determines which key was pressed. onkey up event to log keys.
	  	document.onkeyup = function(event) {
	 		var userGuess = event.key;

	 		console.log(userGuess);


			//the computer to guess a random letter from array of letters
	 	
			// if computer guess and user guess are equal add 1 to win
			// loses one with every key
			if (computerGuess === userGuess) {
				wins += 1;
				newGame();
			} else {
				guesses -= 1;
			}
			
			//add to loses when guesses get to zero≥
			if (guesses === 0) {
				losses += 1;
				newGame();
			}



		    document.querySelector("#win_count").innerHTML = wins;
		    document.querySelector("#loss_count").innerHTML = losses;
		    document.querySelector("#g_left").innerHTML = guesses;

		    var currentValue = document.querySelector("#g_sofar").innerText;
		    var newText = (userGuess + ", " + currentValue).toUpperCase();
		    document.querySelector('#g_sofar').innerHTML = newText;
			//append letters that are displayed. 
			
			//add to loses when guesses get to zero≥
			//reset game on win or loss.  
			

		}
