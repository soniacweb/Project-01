document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid'),
    scoreId = document.getElementById('scoreId'),
    livesId = document.getElementById('livesId'),
    storyId = document.getElementById('story'),
    crawlId = document.getElementById('crawl'),
    divFade = document.querySelector('.fade'),
    playStoryId = document.getElementById('Yes'),
    logoId = document.getElementById('logo'),
    storyQuestionId = document.getElementById('storyQuestion'),
    scoreText = document.querySelector('.score'),
    optionsId = document.querySelector('.options'),
    livesText = document.querySelector('.lives'),
    endMessage = document.querySelector('.endMessage'), 
    start = document.querySelector('.start'),
    reset = document.querySelector('.reset'),
    audio = document.querySelector('audio'),
    width = 15,
    alienStart = [0,1,2,3,4,5,6,7,8,9,10,15,16,17,18,19,20,21,22,23,24,25,30,31,32,33,34,35,36,37,38,39,40],
    alienMovement = [1,1,1,1,width,-1,-1,-1,-1,width],
    squares = []
  let scoreTally = 0,
    livesLeft = 3,
    alienArray = alienStart.slice(), // to create new array to use on reset - splice modifies existing array
    currentAlienMove = 0,
    spaceshipIndex = 217,
    gameInPlay = true,
    moveAliensTimerId,
    alienBombMovementId,
    alienBombId

  start.innerText = 'Play Game'
  // reset.innerText = 'Play Again'

  // Start game function
  function gameInit() {
    squares.forEach(square => square.classList.remove('activeAlien', 'explosion', 'spaceship', 'bullet', 'bomb'))
    console.log(squares.map(square => square.className).join(''))
    gameInPlay = true
    grid.classList.remove('hidden')
    scoreText.classList.remove('hidden')
    livesText.classList.remove('hidden')
    start.classList.add('hidden')
    reset.classList.add('hidden')
    currentAlienMove = 0
    alienArray = alienStart.slice()
    createAlien()
    moveAliensTimerId = setInterval(moveAliens, 400)
    alienBombId = setInterval(alienBomb, 600)
    spaceshipIndex = 217
    squares[spaceshipIndex].classList.add('spaceship')
    livesLeft = 3 // needs to be updated so this listens to livesleft at top of code
    scoreTally = 0
    scoreId.innerText = 0
    livesId.innerText = 3
    endMessage.classList.add('hidden')
    // crawl.classList.add('hidden')
    logoId.classList.add('hidden')
    storyId.classList.add('hidden')
    divFade.classList.add('hidden')
    playStoryId.classList.add('hidden')
    crawlId.classList.add('hidden')
    optionsId.classList.add('hidden')
  
  }

  // CREATE GRID ===============================================================
  for (let i = 0; i < width * width; i++) {
    const square = document.createElement('div')
    if (i < width) square.classList.add('ceiling')
    if (i > width ** 2 - width - 1) square.classList.add('floor')
    squares.push(square) //creates new array of divs
    grid.appendChild(square)
  }
  // LANDING PAGE =====================================================================

  function storyTime() {
    // removing the hidden elements
    // optionsId.classList.add('options'),
    // optionsId.classList.remove('hidden'),
    storyId.classList.add('story'), //actual text is still 'hidden'
    storyId.classList.remove('hidden'), //reveals story
    crawlId.classList.add('crawl'), //add star wars crawl aninmation
    playStoryId.classList.add('hidden') //hide button
    storyQuestionId.classList.add('hidden')
    reset.classList.add('hidden')
    strangerThings()
    //add hide to play button
  }

  playStoryId.addEventListener('click', () => storyTime())


  // AUDIO =====================================================================
  function strangerThings() {
    audio.src = 'Audio/strangerThings.wav'
    audio.play()
    
  }

  // function bulletAudio() {
  //   audio.src = 'sounds/004_13.wav'
  //   audio.play()
  // }
  // function alienBombAudio() {
  //   audio.src = 'sounds/005_14.wav'
  //   audio.play()
  // }
  // //
  // function loseLifeAudio() {
  //   audio.src = 'sounds/009_18.wav'
  //   audio.play()
  // }

  // function gameOverAudio() {
  //   audio.src = 'sounds/016_8.wav'
  //   audio.play()
  // }
  // USER SPACESHIP ============================================================
  function moveSpaceship() {
    // find the square with the class of spaceship
    const spaceship = squares.find(square => square.classList.contains('spaceship'))
    // remove the class of spaceship from that square
    spaceship.classList.remove('spaceship')
    // add the class of player to square the player should move to
    squares[spaceshipIndex].classList.add('spaceship')
  }

  // ALIENS ====================================================================
  function createAlien() { // create alien array
    alienArray.forEach(alien => {
      // console.log('alien array foreach', squares[alien])
      squares[alien].classList.add('activeAlien')
    })
  }

  // MOVE ALIENS ===============================================================
  function moveAliens() {
    alienArray.forEach(alien => {
      squares[alien].classList.remove('activeAlien') // loop through aliens & remove all aliens
    })
    alienArray = alienArray.map(alien => alien + alienMovement[currentAlienMove]) //find new alien positions
    alienArray.forEach(alien => {
      squares[alien].classList.add('activeAlien') //add class of alien to all aliens
    })
    currentAlienMove++     // increment currentMove
    if (currentAlienMove === alienMovement.length) currentAlienMove = 0
    if (alienArray.some(alien => alien >= 210)) {
      gameOver('Game Over')
    }
    // let bottomAliens = alienArray.slice(20)
  }

  // ALIEN BOMB ================================================================
  function alienBomb() {
    let bombIndex = alienArray[Math.floor(Math.random() * alienArray.length)]
    // alienBombAudio()

    const alienBombMovementId = setInterval(() => {
      bombIndex = drawBullet(bombIndex, width, 'bomb')
      if (collision(bombIndex, 'spaceship', 'bomb', alienBombMovementId)) {
        loseLife()
      }
      collision(bombIndex, 'floor', 'bomb', alienBombMovementId)
      console.log('hello')
      if (!gameInPlay) clearInterval(alienBombMovementId)
    }, 600)
  }

  // Lose life function ========================================================
  function loseLife() {
    if (gameInPlay) livesLeft--
    if (livesLeft !== 0) {
      livesId.innerText = livesLeft
      // loseLifeAudio()
    } else {
      livesId.innerText = 0 // cheat here and use 0? sometimes lives keeps going below 0
      gameOver('Game Over')
    }
  }

  function gameOver(message) {
    gameInPlay = false
    // gameOverAudio()
    clearInterval(alienBombId)
    alienBombId = null
    clearInterval(moveAliensTimerId)
    moveAliensTimerId = null
    clearInterval(alienBombMovementId)
    alienBombMovementId = null
    // moveAliensTimerId = null
    // alienBombMovementIds.forEach(alienBombMovementId => clearInterval(alienBombMovementId))
    // alienBombMovementIds = []
    // bulletIntervalIds.forEach(bulletIntervalId => clearInterval(bulletIntervalId))
    // bulletIntervalIds = [] // store in array so we can loop through array to clear intervals
    endMessage.classList.remove('hidden')
    endMessage.innerHTML = message
    grid.classList.add('hidden')
    storyId.classList.remove('hidden')
    storyId.style.height = '200px'
    start.classList.remove('hidden')
    start.innerText = 'Play again'
    scoreId.classList.remove('hidden')
    livesId.classList.remove('hidden')
    // header.classList.remove('hidden')
    // livesLeft = 0
    livesId.innerText = livesLeft
    logoId.classList.remove('hidden')
  }

  function drawBullet(index, next, shot){
    if (squares[index + next]) {
      squares[index].classList.remove(shot)
      index += next
      squares[index].classList.add(shot)
    } else {
      squares[index].classList.remove(shot)
    }
    return index
  }

  // COLLISION =================================================================
  function collision(index, target, shot, interval){
    if (squares[index].classList.contains(target)) {
      console.log(`At ${index}, ${target} hit by ${shot}`)
      squares[index].classList.remove(shot)
      squares[index].classList.add('explosion')
      setTimeout(() => {
        squares[index].classList.remove('explosion')
      }, 300)
      clearInterval(interval)
      return true
    } else return false
  }

  function alienDeath(index){
    squares[index].classList.remove('activeAlien')
    const alienIndex = alienArray.indexOf(index)
    alienArray.splice(alienIndex,1)
  }

  function updateScore(){
    scoreTally++
    scoreId.innerText = scoreTally
  }

  // FIRE BULLET ===============================================================
  function fire(){
    let bulletIndex = spaceshipIndex
    const bulletIntervalId = setInterval(() => {
      bulletIndex = drawBullet(bulletIndex, -width, 'bullet')
      if (collision(bulletIndex, 'activeAlien', 'bullet', bulletIntervalId)){
        alienDeath(bulletIndex)
        updateScore()
        if (alienArray.length === 0) {
          gameOver('You win!')
          
        }
      }
      collision(bulletIndex, 'ceiling', 'bullet', bulletIntervalId)
    }, 100)
  }

  // USER BULLET ===============================================================
  document.addEventListener('keydown', (e) => {
    if (e.keyCode === 32) {
      // bulletAudio()
      fire()
    }
  })

  // USER SPACESHIP ============================================================
  document.addEventListener('keydown', (e) => {
    switch (e.keyCode) {
      case 37:
        //left
        if (spaceshipIndex % width > 0) {
          spaceshipIndex--
          moveSpaceship()
        }
        break
      case 39:
        //right
        if (spaceshipIndex % width < width - 1) {
          spaceshipIndex++
          moveSpaceship()
        }
        break
    }
  })

  start.addEventListener('click', gameInit)

  // KEEP BRACKETS BELOW

})