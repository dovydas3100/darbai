var c = document.getElementById('new'); // Canvas
this.c.width = innerWidth;
this.c.height = innerHeight;
var ct = c.getContext('2d');

var key = []; // Movement
addEventListener ("keydown", function (e) {key[e.keyCode] = true;}, false);
addEventListener ("keyup", function (e) {delete key[e.keyCode];}, false);

setInterval(update, 20);

var enemyWidth = playerWidth = innerWidth*0.015;
var enemyHeight = playerHeight = innerHeight*0.2;
var playerX = innerWidth*0.02;
var enemyY = playerY = innerHeight/2-playerHeight/2;
var enemyX = innerWidth * 0.96;
var enemySpeed = 4;
var enemyScore = 0;
var playerScore = 0;
var speed = 10;

var ballX = innerWidth/2;
var ballY = innerHeight/2;
var ballRadius = innerHeight*0.005+innerWidth*0.005;

var vSpeed = 0;
var ballSpeed = -5;
var move = move = Math.floor((Math.random() * 5)) - 5;;

function drawPlayer(){
	ct.fillStyle = 'white';
	ct.fillRect(playerX, playerY, playerWidth, playerHeight); 
}
function movePlayer(){
	if (38 in key && playerY >= 0){
		playerY -= speed;
		move = Math.floor((Math.random() * -5)) - 3;
	}
	if (40 in key && playerY+playerHeight <= innerHeight){
		playerY += speed;
		move = Math.floor((Math.random() * 5)) + 3;
	}
}

function drawBall(){
	ct.strokeStyle = 'white';
	ct.fillStyle = 'white';
	ct.beginPath();
	ct.arc(ballX,ballY,ballRadius,0,2*Math.PI);
	ct.stroke();
	ct.fill();
}
function moveBall(){
	ballX += ballSpeed;
	ballY += vSpeed;
}
function resetBall(){
	ballX = innerWidth/2;
	ballY = innerHeight/2;
	vSpeed = Math.floor((Math.random() * 5)) - 5;
	ballSpeed = -5;
}

function drawEnemy(){
	ct.fillStyle = 'white';
	ct.fillRect(enemyX, enemyY, enemyWidth, enemyHeight); 	
}
function moveEnemy(){
	if (ballY >= enemyY+enemyHeight/2 && enemyY+enemyHeight <= innerWidth)
		enemyY += enemySpeed;
	else enemyY += 0;
	if (ballY <= enemyY+enemyHeight/2 && enemyY >= 0)
		enemyY -= enemySpeed;
	else enemyY -= 0;
}

function colision(){
	if (ballX <= playerX+playerWidth && playerY+playerHeight >= ballY && playerY <= ballY ){
		ballSpeed = -ballSpeed;
		vSpeed = move;
	}
	if (ballX >= enemyX && enemyY+enemyHeight >= ballY && enemyY <= ballY)
		ballSpeed = -ballSpeed;
	if (ballY+ballRadius <= 0)
		vSpeed = -vSpeed;
	if (ballY+ballRadius >= innerHeight)
		vSpeed = -vSpeed;
	if (ballX <= playerX){
		enemyScore++;
		resetBall();
	}
	if (ballX >= enemyX+enemyWidth){
		playerScore++;
		resetBall();
	}
}

function scores(){
	ct.font = '15px Arial';
	ct.fillStyle = 'white';
	ct.fillText(playerScore, innerWidth*0.4, 100);
	ct.fillText(enemyScore, innerWidth*0.6, 100);
}
function clear(){
	ct.fillStyle = 'black';
	ct.fillRect(0, 0, innerWidth, innerHeight);
}

function update(){
	clear();
	drawPlayer();
	drawEnemy();
	drawBall();
	movePlayer();
	moveEnemy();
	moveBall();
	colision();
	scores();
}