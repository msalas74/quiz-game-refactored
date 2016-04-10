$(document).ready(function() {

	//init game
	var game = new Game("Sulla");

	//add all Emperors to game
	game.emperorsList.push(Sulla);
	game.emperorsList.push(Augustus);
	game.emperorsList.push(Hadrian);
	game.emperorsList.push(Julius);


	game.init();

	//scoreboard
	var score = new ScoreBoard();


	// analyze the choice "game loop"
	$('input:button').click(function(){

			var picked = $('input:checked').val();
			//console.log("picked: " + picked);

			//check for first game
			if (game.current >= game.emperorsList.length) {
				game.current = 1;
				game.points = 0;
				game.xPosition = 0;
				game.init();
				console.log("end of game");
			} else {

				//check for answer
				if (picked === game.currentEmperor) {
					game.currentEmperor = game.loadQuiz(game.emperorsList[game.current]);
					game.points++;
					game.current++;
					score.updateScore(game);
					score.moveIcon(true, game);
				} else {
					game.currentEmperor = game.loadQuiz(game.emperorsList[game.current]);
					game.points--;
					game.current++;
					score.updateScore(game);
					score.moveIcon(false, game);
				}


				console.log(picked === game.currentEmperor);
			};

	}); 
	
	
	
	
});