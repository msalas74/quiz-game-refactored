
var ScoreBoard = function () {};

ScoreBoard.prototype.updateScore = function(game) {
	//game.points = game.points + points;
	$('#msg').text('You got ' + game.points + ' out of ' + game.emperorsList.length);
}

ScoreBoard.prototype.moveIcon = function(correct, game) {
	var xPosition = game.xPosition + 5;
	var xPrevious = game.xPosition;
	xPrevious += "rem";
	game.xPosition = xPosition;
	var x = xPosition + "rem";

	if (correct) {
		$('.armor-icon').css('background-image','url(' + game.armor[game.points] +')');
	}


	$('.armor-icon').animate({left:x}, 1000, function(){
		$('.armor-icon').attr('left',x);

		if (correct) {
			var current = game.current - 1;
			console.log(current);

			$('.timeline').append('<span id="point'+ game.points +'" class="score"></span>');

			$('.timeline #point' + game.points).css('left', xPrevious);
				

		} else {
			console.log("not correct");
				
		}

	});
}

