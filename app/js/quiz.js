
//create quiz object literal ** refactor **
var GameQuiz = function(emperor) {
	this.emperor = emperor;
	this.emperorPath = "";
	this.quiz = "";
	this.multiChoice = [];
};



function nextQuiz(next) {
		
		if (next == 2) {
			

		} else if (next == 3) {
			
		} else if (next == 4) {
			
		} else if (next == 5) {
			return emporerQuiz(
			"Marcus",
			"./img/emporers/Marcus.svg", 
			"The Roman Emperor from 161 to 180. He ruled with Lucius Verus as co-emperor from 161 until Verus' death in 169. He was the last of the Five Good Emperors, and is also considered one of the most important Stoic philosophers.",
			["Marcus", "Tiberius", "Sulla", "Pompey"]);
		} else if (next == 6) {
			return emporerQuiz(
			"Pompey",
			"./img/emporers/Pompey.svg", 
			"A military and political leader of the late Roman Republic. He came from a wealthy Italian provincial background, and his father had been the first to establish the family among the Roman nobility. Military success in Sulla's Second Civil War led him to adopt the nickname Magnus, \"the Great\". He was consul three times and celebrated three triumphs.",
			["Augustus", "Hadrian", "Pompey", "Julius"]);
		} else if (next == 7) {
			return emporerQuiz(
			"Tiberius",
			"./img/emporers/tiberius.svg", 
			"One of Rome's greatest generals; his conquest of Pannonia, Dalmatia, Raetia, and temporarily, parts of Germania laid the foundations for the northern frontier. But he came to be remembered as a dark, reclusive, and sombre ruler who never really desired to be emperor; Pliny the Elder called him tristissimus hominum, \"the gloomiest of men.\"",
			["Sulla", "Tiberius", "Hadrian", "Pompey"]);
		} else {
			
			return "game over";
		}
		
		
};

//create new object for Sulla and init all properties====================
var Sulla = new GameQuiz("Sulla");
Sulla.emperorPath = "./img/emporers/sulla.svg";
Sulla.quiz = "This Roman was a general and statesman.  He unconstitutionally marched his armies into Rome and defeated Marius in battle.  This action consequently paved the way for future emporers.";
Sulla.multiChoice = ["Augustus", "Hadrian", "Sulla", "Julius"];

var Augustus = new GameQuiz("Augustus");
Augustus.emperorPath = "./img/emporers/Augustus.svg"; 
Augustus.quiz =	"The founder of the Roman Empire and its first Emperor, ruling from 27 BC until his death in 14 AD.  Together with Mark Antony and Marcus Lepidus, he formed the Second Triumvirate to defeat the assassins of Caesar.";
Augustus.multiChoice = ["Augustus", "Hadrian", "Sulla", "Julius"];

var Hadrian = new GameQuiz("Hadrian");
Hadrian.emperorPath = "./img/emporers/Hadrian.svg"; 
Hadrian.quiz =	"He rebuilt the Pantheon and constructed the Temple of Venus and Roma. He is also known for a wall, which marked the northern limit of Britannia.";
Hadrian.multiChoice = ["Pompey", "Julius", "Marcus", "Hadrian"];

var Julius = new GameQuiz("Julius");
Julius.emperorPath = "./img/emporers/Julius.svg"; 
Julius.quiz =	"A Roman general, statesman, Consul, and notable author of Latin prose. He played a critical role in the events that led to the demise of the Roman Republic and the rise of the Roman Empire.";
Julius.multiChoice = ["Pompey", "Hadrian", "Julius", "Augustus"];



