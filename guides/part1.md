# Making game
# Part 1. Including.
For start download file "game.js" in source code. The file has this code:
```javascript
var cvs = document.getElementById("canvas");
var ctx = 2d; //Installing Canvas

var sprite1 = new Image(); //Setting up sprites
var sprite2 = new Image();
var bg = new Image();

sprite1.src = /path/to/sprite1.png;
sprite2.src = /path/to/sprite2.png;
bg.src = /path/to/bg.png;

var score = 0; //Score
var hp = 100;  //Health
var jsize = 10; //Jump size
var dmg = 30; //Damage
//And other variables...

function draw() {
  //Main code. Drawing all game.
  requestAnimationFrame(draw); //Making drawing always
}
```
Sprite1 and sprite2 variables is a sprites. Bg is a background.
The draw() function drawing sprites and background on canvas (Don't change function name!!!).
Let's include script to main page!
```html
<html>
<!-- The file name is a main.html !!! -->
<head>
 <meta charset = "UTF-8">
 <title>Game</title>
</head>
<body>
 <script src = "/path/to/game.js"></script>
 <canvas id = "canvas" width = "500" height = "500"></canvas>
</body>
</html>
```
Let's make a background! Open game.js and add those strings:
```javascript
function draw() {
  //Main code. Drawing all game.
  bg.x = 0; //x
  bg.y = 0; //y
  requestAnimationFrame(draw); //Making drawing always
} //Your background size must be 50*50!
```
Now background is on canvas!
Look the part 2!
