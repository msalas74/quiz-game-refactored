
//create quiz object literal ** refactor **
var GameQuiz = function(emperor) {
	this.emperor = emperor;
	this.emperorPath = "";
	this.quiz = "";
	this.multiChoice = [];
};

//create new object for Sulla and init all properties===== TODO convert to JSON===============
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

var Marcus = new GameQuiz("Marcus");
Marcus.emperorPath = "./img/emporers/Marcus.svg"; 
Marcus.quiz =	"The Roman Emperor from 161 to 180. He ruled with Lucius Verus as co-emperor from 161 until Verus' death in 169. He was the last of the Five Good Emperors, and is also considered one of the most important Stoic philosophers.";
Marcus.multiChoice = ["Marcus", "Tiberius", "Sulla", "Pompey"];

var Pompey = new GameQuiz("Pompey");
Pompey.emperorPath = "./img/emporers/Pompey.svg"; 
Pompey.quiz =	"The Roman Emperor from 161 to 180. He ruled with Lucius Verus as co-emperor from 161 until Verus' death in 169. He was the last of the Five Good Emperors, and is also considered one of the most important Stoic philosophers.";
Pompey.multiChoice = ["Augustus", "Hadrian", "Pompey", "Julius"];

var Tiberius = new GameQuiz("Tiberius");
Tiberius.emperorPath = "./img/emporers/Tiberius.svg"; 
Tiberius.quiz =	"The Roman Emperor from 161 to 180. He ruled with Lucius Verus as co-emperor from 161 until Verus' death in 169. He was the last of the Five Good Emperors, and is also considered one of the most important Stoic philosophers.";
Tiberius.multiChoice = ["Sulla", "Tiberius", "Hadrian", "Pompey"];
