$(document).ready(function () {
	//  init game
  var game = new Game ('Sulla')
	//  add all Emperors to game
  game.emperorsList.push(Sulla)
  game.emperorsList.push(Augustus)
  game.emperorsList.push(Hadrian)
  game.emperorsList.push(Julius)

  game.emperorsList.push(Marcus)
  game.emperorsList.push(Pompey)
  game.emperorsList.push(Tiberius)
  game.init(game.emperorsList[0])

	//  scoreboard
  var score = new ScoreBoard ()

	// analyze the choice 'game loop'
  $('input:button').click(function () {
    var picked = $('input:checked').val()
			//  console.log('picked: ' + picked)
			//  check for game over
			//  check for first game
    if (game.current > game.emperorsList.length) {
      game.current = 1
      game.points = 0
      game.xPosition = 0
      $('input:button').val('conquer')
      game.init(game.emperorsList[0])
    } else {
    //  check for answer
      if (picked === game.currentEmperor) {
        console.log(picked === game.currentEmperor)
        game.points++
        score.updateScore(game)
        score.moveIcon(true, game)
      } else {
        console.log(picked === game.currentEmperor)
        //  if (!game.points <=0) game.points--
        score.updateScore(game)
        score.moveIcon(false, game)
      }

      game.current++

      if (game.current <= game.emperorsList.length) {
        console.log('current Emperor ' + game.emperorsList[game.current - 1].emperor)
        game.currentEmperor = game.loadQuiz(game.emperorsList[game.current - 1])
      } else {
        console.log('end of game')
        $('input:button').val('reset')
      }
//  console.log(picked === game.currentEmperor)
    }
  })
})
