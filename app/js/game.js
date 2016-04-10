
//create game object literal and set up properties for first quiz
var Game = function(emperor) {
	this.currentEmperor = emperor;
	this.armor= ["./img/armor/gallic-f.svg", "./img/armor/gallic-f-2.svg", "./img/armor/gallic-f-3.svg", "./img/armor/Centurion-White.svg", "./img/armor/Centurion-Special-Command.svg","./img/armor/Centurion-Special-Command-2.svg", "./img/armor/Praetorian.svg", "./img/armor/Praetorian-2.svg"];
	this.xPosition = 0;
	//this.questions = 7;
	this.gameOver = false;
	this.current = 1;
	this.points = 0;
	this.emperorsList = [];

	return this.currentEmperor;
};

Game.prototype.loadQuiz = function (emperor) {

	this.emperor = emperor;

	//fill out quiz form
	$('.emporer-icon img').attr('src', this.emperor.emperorPath);
	var t = document.createTextNode(this.emperor.quiz);
	$('section.question h2').html(t);

	//get how many items in multi array from game object
	var count = this.emperor.multiChoice.length;
	//fillout the multi answer
	for (var i = 0; i<count; i++) {
		var t = document.createTextNode(this.emperor.multiChoice[i]);
		var ans = i + 1;
		$('span#opt' + i).html(t);

		//fillout radio value and reset choice
		$('input#ans' + ans).val(this.emperor.multiChoice[i]);
		$('input#ans' + ans).removeAttr('checked');
	}

	//return correct answer
	return this.emperor.emperor;
};


//initialize function object
Game.prototype.init = function(emperor) {	

	//clear win/lose prompt and reset button
	$('input:button').val('conquer');
	$('#msg').text('');

	//reset back to the first question and load quiz items
	this.currentEmperor = this.loadQuiz(emperor);

	//reset visual timeline score board
	$('.timeline').html('<div class="armor-icon"></div><img src="img/time.png"><br><p class="left">BCE</p><p class="right">CE</p>');
	console.log("game init");
};




