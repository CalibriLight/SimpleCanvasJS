var cvs = document.getElementById("canvas");
var ctx = 2d; //Installing Canvas

var sprite1 = new Image(); //Setting up sprites
var sprite2 = new Image();
var bg = new Image();

var score = 0; //Score
var hp = 100;  //Health
var jsize = 10; //Jump size
var dmg = 30; //Damage
//And other variables...

function draw() {
	//Main code. Drawing all game.
	requestAnimationFrame(draw); //Making drawing always
}