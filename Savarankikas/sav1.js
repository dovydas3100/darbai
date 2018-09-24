var c = document.getElementById('new'); // Canvas
this.c.width = innerWidth;
this.c.height = innerHeight;
var ct = c.getContext('2d');

var key = []; // Movement
addEventListener ("keydown", function (e) {key[e.keyCode] = true;}, false);
addEventListener ("keyup", function (e) {delete key[e.keyCode];}, false);
onkeypress = fun;
var r=255,g=0,b=0;

var x = innerWidth*0.05; // Player 
var y = innerHeight/2;
var playerHeigh = innerHeight * 0.05;
var playerWidth = innerWidth * 0.025;
var win = 0;
var lose = 0;
var speed = 5;

var enemyArray = []; // Enemy
var enemy0 = {},enemy1 = {},enemy2 = {},enemy3 = {},enemy4 = {},enemy5 = {},enemy6 = {},enemy7 = {},enemy8 = {};
var max = 10, min = 3;

setInterval(update,20); // Update interval

function drawPlayer(){
		ct.fillStyle = 'red';
		ct.fillRect(x, y , playerWidth , playerHeigh);
}
function movePlayer(){
	if (40 in key)
		y += speed;
	if (39 in key)
		x += speed;
	if (38 in key)
		y -= speed;
	if (37 in key)
		x -= speed;
}
function playerReset(){
	x = innerWidth*0.05;
	y = innerHeight/2;
}

function creatEnemy(){
	enemyArray.forEach(function(e){
		e.x = Math.floor((Math.random() * (innerWidth*0.75))) + innerWidth*0.15;
		e.y = Math.floor((Math.random() * -30)) - 12;
		e.speed = Math.floor((Math.random() * max)) + min;
		e.height = Math.floor((Math.random() * innerHeight*0.08)) + innerHeight*0.04;
		e.width = innerWidth*0.025;
	});
}
function drawEnemy(){
	enemyArray.forEach(function(e){
		//ct.fillStyle = 'rgb('+r+','+g+','+b+')';
		ct.fillStyle = 'white';
		ct.fillRect(e.x, e.y, e.width, e.height);
	});
}
function moveEnemy(){
	enemyArray.forEach(function(e){
		e.y += e.speed;
		if (e.y > innerHeight){
			e.y = Math.floor((Math.random() * -30)) - 12;
			e.x = Math.floor((Math.random() * (innerWidth*0.75))) + innerWidth*0.15;
			e.speed = Math.floor((Math.random() * max)) + min;
		}
	});
}

function colision(){
	enemyArray.forEach(function(e){
		if (x+playerWidth <= e.x+e.width && x+playerWidth+playerWidth >= e.x+e.width && y+playerHeigh <= e.y+e.height && y+playerHeigh+e.height >= e.y+e.height 
			|| x+playerWidth <= e.x+e.width && x+playerWidth+playerWidth >= e.x+e.width && y+playerHeigh >= e.y+e.height && y+playerHeigh <= e.y+e.height+playerHeigh 
			|| x+playerWidth >= e.x+e.width && x+playerWidth <= e.x+e.width+e.width && y+playerHeigh <= e.y+e.height && y+playerHeigh+e.height >= e.y+e.height
			|| x+playerWidth >= e.x+e.width && x+playerWidth <= e.x+e.width+e.width && y+playerHeigh >= e.y+e.height && y+playerHeigh <= e.y+e.height+playerHeigh 
			|| x <= 0 || y <= 0 || y+playerHeigh >= innerHeight){
			playerReset();
			lose++;
		}
	});
	if (x+playerWidth >= innerWidth){
		playerReset();
		win++;
	}	
}

function start(){
	ct.strokeStyle = 'white';
	ct.beginPath();
	//ct.moveTo(innerWidth*0.1,innerHeight * 0.2);
	//ct.lineTo(innerWidth*0.1,innerHeight * 0.8);
	ct.moveTo(innerWidth*0.1, 0);
	ct.lineTo(innerWidth*0.1, innerHeight);
	ct.lineWidth = 2;
	ct.stroke();
}
function finish(){
	ct.strokeStyle = 'white';
	ct.beginPath();
	ct.moveTo(innerWidth*0.95, 0);
	ct.lineTo(innerWidth*0.95, innerHeight);
	ct.stroke();
}
function score(){
	ct.font = '15px Arial';
	ct.fillStyle = 'white';
	ct.fillText('Win score : ' + win, 0, 15);
	ct.fillText('Lose score : ' + lose, 0, 35);
	//ct.font = '10px Arial';
	//ct.fillText('Max enemy speed : ' + max, 0, 55);
	//ct.fillText('Min enemy speed : ' + min, 0, 75);
	//ct.fillText('Player speed : ' + speed, 0, 95);
}
function clear(){
	ct.fillStyle = "black";
	ct.fillRect(0,0,innerWidth,innerHeight);
}
function fun(e){
	e = e || window.event;
	if (e.keyCode == '43'){ //num+
		max++;
		min++;
		console.log(max);
	}
	if (e.keyCode == '45' && min > 1){//num-
		max--;
		min--;
	}
	if (e.keyCode == '56')//num 8
		speed++;
	if (e.keyCode == '53' && speed > 1)//num 5
		speed--;
}
function test(){
  if(r > 0 && b == 0){
    r--;
    g++;
  }
  if(g > 0 && r == 0){
    g--;
    b++;
  }
  if(b > 0 && g == 0){
    r++;
    b--;
  }
}
function update(){
	clear();
	drawPlayer();
	drawEnemy();
	movePlayer();
	moveEnemy();
	colision();
	start();
	finish();
	score();
	//test();
}

enemyArray.push(enemy0);
enemyArray.push(enemy1);
enemyArray.push(enemy2);
enemyArray.push(enemy3);
enemyArray.push(enemy4);
enemyArray.push(enemy5);
enemyArray.push(enemy6);
enemyArray.push(enemy7);
enemyArray.push(enemy8);
creatEnemy();