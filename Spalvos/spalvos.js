var score = 0;
var best_score = 0;
var mult = 1;
var hp_left = 100;
var hp_time = 500;
var hpdrain = 4;
var tmp = setInterval(hp, hp_time);
clearInterval(tmp);
function table(){ // Creating Talbe
	var n = document.getElementById("x").value;
	var k = document.getElementById("y").value;
	var id = n*k;
	var table = "<table>";
	for (var i = 0; i < n; i++){
		table += "<tr>";
		for (var j = 0; j < k; j++){
			table += "<td id = "+ id +" onclick = 'tesr(this.id)'> </td>";
			id--;
		}
		table += "</tr>";
	}
	table += "</table>";
	document.getElementById("table").innerHTML = table;
	var Bg = [];
	for (var i = 1; i <= n*k; i++){
		Bg[i-1] = colors();
		document.getElementById(i).style.backgroundColor = Bg[i-1];
	}
	colorco(Bg,n,k);
}
function tesr(thatid){ // Main game
		var p = thatid;
		if (document.getElementById("this").style.backgroundColor == document.getElementById(p).style.backgroundColor){
			table();
			score++;
			document.getElementById("score").innerHTML = score;
			hp_left = 100;
		}
		else{
			if (score != 0)
				score--;
			document.getElementById("score").innerHTML = score;
			hp_left -= 20;
		}
		if(score == 10*mult && hp_time != 50){ // Hp
			hp_time -= 50;
			mult++;
			start();
		}
}
function colors(){ // Creating random colors
	var color = "#";
	var a = "0123456789ABCDEF";
	for (var i = 0; i < 6; i++)
		color += a.charAt(Math.floor(Math.random() * a.length));
	return color;
}
function colorco(Bg,n,k){ // Creating what color has to be picked
	var table2 = "<table>";
	table2 += "<tr>";
	table2 += "<td id = 'this'> </td>";
	table2 += "</tr>";
	table2 += "</table>";
	document.getElementById("tab").innerHTML = table2;
	var w = Math.floor(Math.random() * (n*k)-1) + 1;
	document.getElementById("this").style.backgroundColor = Bg[w];	
}
function hp(){ // Hp deplete
	if (score < 90) 
		hp_left -= hpdrain;
	else
		hp_left -= hpdrain-1.5;
	document.getElementById("hp").value = hp_left;
	if(hp_left <= 0){
		if (score > best_score)
			best_score = score;
		alert("Final score is: " + score + ", best was: "+ best_score +" press OK to restart");
		score = 0;
		mult = 1;
		hp_left = 100;
		hp_time = 500;
		table();
		start();
		document.getElementById("score").innerHTML = score;
	}
}
function start(){ // Loop for hp prosses
	clearInterval(tmp);
	tmp = setInterval(hp, hp_time);
}
var a = 0; // Menu
function show(){
	if (a % 2 == 0){
		document.getElementById('hard').style.display = 'block';
		document.getElementById('normal').style.display = 'block';
		document.getElementById('easy').style.display = 'block';
		a++;
	}
	else{
		document.getElementById('hard').style.display = 'none';
		document.getElementById('normal').style.display = 'none';
		document.getElementById('easy').style.display = 'none';
		a++;
	}
}
function hard(){
	hpdrain = 5;
}
function normal(){
	hpdrain = 4;
}
function easy(){
	hpdrain = 3;
}
function go(){
	var tmp = document.getElementById("x").value;
	var temp = document.getElementById("y").value;
	if (!isNaN(tmp) && tmp != null && tmp != '' && !isNaN(temp) && temp != null && temp != ''){
		table();
		start(); 
		document.getElementById('hp').style.opacity = 100;
		document.getElementById('menu').style.display = 'none';
	}
}
//121 3x3 nothing
//102 3x3 color
//118 3x3 new hp system