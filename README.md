
![ga_cog_large_red_rgb](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png)

<img src='https://i.imgur.com/PY5QBmk.png' alt='logo'> 

<h1>PROJECT-01 SPACE INVADERS</h1>

Space Invaders is an entertaining browser-based arcade style game. 

Challenge your speed and reactional skills by avoiding the alien bombs dropping as you defend Earth against the alien army. 

This was my first project from General Assembly's Web Development Immersive Course. 
It was an independent project built in a week, and is both the first real game I have built, and the first instance applying real-world-type logic with vanilla JavaScript.


<h2>Technologies used</h2>

> JavaScript (ES6) <br>
> HTML5/ HTML5 Audio <br>
> CSS <br>
> git <br>
> GitHub <br>
> CSS animation <br>

<h2>Overview</h2>

<p>Link to <a href="https://soniacweb.github.io/SEI-Project-01-Space-Invaders/">Space Invaders</a> is here<p>

Here's screen grab of the landing page:

![](https://github.com/soniacweb/Project-01/blob/master/Space%20Invaders%20landing%20page%20giph.gif)

And a live demo of me playing badly (I sped up the tempo):

![](https://github.com/soniacweb/Project-01/blob/master/Space%20Invaders-%20Game%20in%20play%20gif.gif)

<h2>Introduction</h2>

My iteration of the classic Space Invaders game, while remaining loyal to the game back when it launched in the 80s, has a 'Mighty Thor'-inspired twist. 
The aim of the game has remained the same: for the user to shoot the invading alien armada before it reaches dangerously close to earth/the player.
As the alien fleet obviously don't come in peace and periodically drops bombs towards the Thor. 
The player must dodge these bombs hurtling towards them by moving from left to right. 
Thor can use his hammer to throw lightening if the user presses the space bar to shoot at the approaching aliens. 
The player wins by destroying the alien armada. The player has three lives, and loses a life each time the player is hit by one of the bombs dropped by the alien armada. 
Once the player has won or died, the player can choose to play again.

The aim of the game is to achieve the highest score before the aliens reach the spaceship.

<h2>Timeframe</h2>

7 day solo project

<h2>Brief</h2>

Render a grid-based game in the browser

Design logic for winning & visually display which player won
Create HTML, CSS and JavaScript files
Use Javascript to manipulate the DOM
Deploy game using Github Pages
Player's score should be displayed at end2112 of game
Player should be able to clear at least one wave of aliens

<h2>Controls</h2>


Player movements: ⬅️➡️ to move left and right
Player lightening: press spacebar to fire lightening


<h2>Game Instructions</h2>

The game begins with a simple landing page. Click on 'Play' to start the story.

![Landing page](https://github.com/soniacweb/Project-01/blob/master/Landing%20page.png)

Once you hit the play button, it triggers a brief story I outlined for the user to enjoy and background music (courtesy of the Stranger Things theme). There is also an option for the user to skip the story and go directly to the game by selecting 'Play Game' button.

![](https://github.com/soniacweb/Project-01/blob/master/Story%20page.png)

On page load, the aliens will start moving towards the player (Thor) and drop bombs periodically. I have included a Score and Lives tally above the grid for the User's FYI.

![](https://github.com/soniacweb/Project-01/blob/master/Game%20in%20play.png)

As mentioned previously, the player has the option to use the left and right arrow keys to dodge the alien bombs, and the spacebar to fire lightening upwards to kill the aliens from their current position.

<h1>Process</h1>

The first thing I did was create a 15 x 15 grid in Javascript to build the rest of the game around. I then recognised there were five key parts of the game I needed to tackle before moving forward with any logic: creating an array of aliens; using a set interval to move the aliens across and down the page; creating Thor on the page ad the player, which moves from left to right within the 15 x 15 grid on an event listener; adding an event listener to allow the player to fire lightning and creating a set interval to make the aliens drop blue orbs/bombs.

<h1>Aliens</h1>

To create the alien army, I created a class of of 'activeAlien' in CSS which I added to my alien array in Javascript using the forEach method. To move the alien army I used multiple arrays along with forEach to loop through the alien array to remove the class of alien, find the new position of the aliens and increment the position of aliens until they reached the bottom of the grid.

 ![](https://github.com/soniacweb/Project-01/blob/master/CreateAlien.png)
 
<h1>Moving The Aliens</h1>

I created a function for the alien army to drop bombs using two set intervals to drop them periodically, which then moved down the grid a cell at a time.

 ![](https://github.com/soniacweb/Project-01/blob/master/Move%20Aliens.png)
 
<h1> Player's spaceship, collisions, score </h1>

To create the players position I added the class of spaceship to the relevant cell at the bottom and added an event listener to move from left to right. I also added an event listener for the user to fire lightning at the alien army, using a set interval to get the lightning to move up the grid.

Once I had the primary functions in place, I wanted to add components to create collisions, offer scenarios where the user could win or lose, update the score and lose lives.

I also added a game over function and initialise game function to end and offer the oportunity to re-start the game.

Once the game was functioning as it should, and bug-free, I focused on the CSS to improve the look of the game. I added a video for a background and wanted a nostalgic 80's feel for the overall look of the game by playing around with color themes and fonts.


<h1>Challenges</h1>
The biggest challenge in recreating Space Invaders was working with set intervals. The implementation of the re-start function was the most challenging due to the amount of set intervals already sprinkled throughout the game, and ensuring these were all cleared for the reset function to work bug free.

The movement of the alien armry both diagonally in formation was also another challenge and took a lot of planning and bouncing ideas from my classmates to break down into manageable steps.

The finishing touch included designing a landing page with animation created using CSS animation, and utilizing a 'hidden' class via Javascript was also challenging. 


<h1> Wins</h1>
I was really pleased with the overall game and what I had achieved as my first attempt using everything I had learned about Javascript on a solo project. 

In particular, my understanding of arrays, set intervals and manipulating code using the DOM improved dramatically over the seven days.

<h1>Future features</h1>
<h3>The three main improvements I'd like to make are as follows:</h3>

-Adding a leaderboard using localStorage to keep a track of high scores.<br>
-Make the game responsive and fully functioning on mobile and tablet.<br>
-Make the game more enjoyable for users by adding different levels of difficulty. <br>
