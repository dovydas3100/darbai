			var moves = 1;
			var p1 = 0, p2 = 0, d = 0;
			var PlayerVsPlayer = 1;
			table();
			function table(){ // Generiuojama 3x3 lentele
			var tab = "<table border = 1>";
			var c = 10;
				for (var i = 0; i < 3; i++){
					tab += "<tr>";
					for (var j = 0; j < 3; j++){
						c--;
						tab += "<td id = " + c + " onclick = 'document.getElementById(\"test\").value = "+ c +"; xo()' ></td>";
					}
					tab += "</tr>";
				}
			tab += "</table>";
			moves = 1;			
			document.getElementById("table").innerHTML = tab;
			document.getElementById("text").innerHTML = " ";
			document.getElementById("gam").innerHTML = " ";
			document.getElementById("players").innerHTML = "Player 1 : ";
			document.getElementById("ap1").innerHTML = "Player 1 Wins: " + p1;
			document.getElementById("ap2").innerHTML = "Player 2 Wins: " + p2;
			document.getElementById("ad").innerHTML = "Draws: " + d;
			PlayerVsPlayer = parseInt(document.getElementById("One").value);
			}
			function xo(){ // Zaideju ejimai ir tikrinimas ar irase tinkama sakiciu, bei ar nededa ant virsaus pazimeto langelio
				if (moves != 11){
					if (moves % 2 != 0){
						var kuri = "X";
						var x = document.getElementById("test").value;
						var gn = document.getElementById(x).innerHTML;
						if (gn != 'O' && gn != 'X'){
							document.getElementById(x).innerHTML = "X";
							document.getElementById("text").innerHTML = " ";
							moves++;
							tikrinti(kuri);
							document.getElementById("players").innerHTML = "Player 2 : ";
						}
					}
					else{
						if (PlayerVsPlayer){
							var kuri = "O";
							var o = document.getElementById("test").value;
							var gn = document.getElementById(o).innerHTML;
							if (gn != 'O' && gn != 'X'){
								document.getElementById(o).innerHTML = "O";
								document.getElementById("text").innerHTML = " ";
								moves++;
								tikrinti(kuri);
								document.getElementById("players").innerHTML = "Player 1 : ";
							}
						}
						else{
							var kuri = "O";
							document.getElementById("players").innerHTML = "Player 1 : ";
							var ejimas = 0;
							ejimas = AI();
							if (ejimas)
								moves++;
							tikrinti(kuri);
						}
					}
					if (moves == 10){
						document.getElementById("text").innerHTML = "DRAW";
						d++;
					}
					xo();
				}
				else
					document.getElementById("gam").innerHTML = "Zaidimas pasibaige!";
				console.log(moves);
			}
			function tikrinti(kuri){
				var c = 10;
				for (var i = 0; i < 3; i++){ // Tikrinimas horizontaliai ar kuris nors zaidejas laimejo
					var winXO = 0;
					for (var j = 0; j < 3; j++){
						c--;
						if (document.getElementById(c).innerHTML == kuri)
							winXO++;
						else
							winXO = 0;
						if (winXO >= 3){
							moves = 11;
						}
					}
				}
				for (var i = 0; i < 3; i++){ // Tikrinimas vertikaliai ar kuris nors zaidejas laimejo
					var a = 12 - i;
					winXO = 0;
					for (var j = 0; j < 3; j++){
						a -= 3;
						if (a > 0){
							if (document.getElementById(a).innerHTML == kuri)
								winXO++;
							else
								winXO = 0;
						}
						if (winXO >= 3){
							moves = 11;
						}
					}
				}
				if (document.getElementById("9").innerHTML == kuri && document.getElementById("5").innerHTML == kuri && document.getElementById("1").innerHTML == kuri) // Tikriname istrizai
					moves = 11;
				if (document.getElementById("7").innerHTML == kuri && document.getElementById("5").innerHTML == kuri && document.getElementById("3").innerHTML == kuri)
					moves = 11;
				if (moves == 11)
					if (kuri == "X"){
						document.getElementById("text").innerHTML = "Player 1 WON!!";
						p1++;
					}
					else{
						document.getElementById("text").innerHTML = "Player 2 WON!!";
						p2++;
					}
			}
			function AI(){
				var A = [];
				var id = 9;
				for (var i = 0; i < 3; i++)
					for (var j = 0; j < 3; j++){
						A[id] = document.getElementById(id).innerHTML;
						id--;
					}
				for (var k = 1; k <= 2; k++){
					if (k == 1){
						var ox = 'X';
						var xo = 'O';
					}
					else{
						xo = 'X';
						ox = 'O';
					}
					for (var i = 1; i <= 3; i++){
						var tmp0 = 12, tmp1 = 11, tmp2 = 10;
						tmp0 -= 3*i;
						tmp1 -= 3*i;
						tmp2 -= 3*i;
						if (A[tmp0] == xo && A[tmp1] == xo && A[tmp2] != ox){ // 9, 8, 7; 6, 5, 4; 3, 2, 1;
							document.getElementById(tmp2).innerHTML = 'O';
							console.log("SHOW ME SOMEThiNG FOR FUCK SAKE");
							return 1;
						}
						else{
							tmp2 += 2; 
							tmp1--;
							tmp0--;
						}
						if (A[tmp0] == xo && A[tmp1] == xo && A[tmp2] != ox){ // 8, 7, 9; 5, 4, 6; 2, 1, 3;
							document.getElementById(tmp2).innerHTML = 'O';
							return 1;
						}
						else{
							[tmp2, tmp0] = [tmp0, tmp2];
						}
						if (A[tmp0] == xo && A[tmp1] == xo && A[tmp2] != ox){ // 9, 7, 8; 6, 4, 5; 3, 1, 2;
							document.getElementById(tmp2).innerHTML = 'O';
							return 1;
						}				
					}
					//Why u do dis, work plz ;-;
					for (var i = 0; i < 3; i++){
						var tmp0 = 9, tmp1 = 6, tmp2 = 3;
						tmp0 -= i;
						tmp1 -= i;
						tmp2 -= i;
						if (A[tmp0] == xo && A[tmp1] == xo && A[tmp2] != ox){ // 9, 6, 3; 8, 5, 2; 7, 4, 1;
							document.getElementById(tmp2).innerHTML = 'O';
							return 1;
						}
						else{
							tmp2 += 6; 
							tmp1 -= 3;
							tmp0 -= 3;
						}
						if (A[tmp0] == xo && A[tmp1] == xo && A[tmp2] != ox){ // 6, 3, 9; 5, 2, 8; 4, 1, 7;
							document.getElementById(tmp2).innerHTML = 'O';
							return 1;
						}
						else{
							[tmp2, tmp0] = [tmp0, tmp2];
						}
						if (A[tmp0] == xo && A[tmp1] == xo && A[tmp2] != ox){ // 9, 3, 6; 8, 2, 5; 7, 1, 4;
							document.getElementById(tmp2).innerHTML = 'O';
							return 1;
						}
					}
					if (A[9] == xo && A[5] == xo && A[1] != ox){ // Tikrina istrizai 
						document.getElementById(1).innerHTML = 'O';
						return 1;
					}
					if (A[9] == xo && A[1] == xo && A[5] != ox){
						document.getElementById(5).innerHTML = 'O';
						return 1;
					}
					if (A[1] == xo && A[5] == xo && A[9] != ox){
						document.getElementById(9).innerHTML = 'O';
						return 1;
					}
					if (A[7] == xo && A[5] == xo && A[3] != ox){
						document.getElementById(3).innerHTML = 'O';
						return 1;
					}
					if (A[3] == xo && A[7] == xo && A[5] != ox){
						document.getElementById(5).innerHTML = 'O';
						return 1;
					}
					if (A[3] == xo && A[5] == xo && A[7] != ox){
						document.getElementById(7).innerHTML = 'O';
						return 1;
					}
				}
				if (A[5] == 'X' && A[9] != 'O' && A[9] != 'X'){ // Keleta iskirtiniu komandu padeti AI buti sunkesniam
					document.getElementById(9).innerHTML = 'O';
					return 1;
				}
				if (A[1] == 'X' && A[3] != 'O' && A[3] != 'X'){
					document.getElementById(3).innerHTML = 'O';
					return 1;
				}
				if (A[5] != 'O' && A[5] != 'X'){
					document.getElementById(5).innerHTML = 'O';
					return 1;
				}
				var DetiRand = Math.floor((Math.random() * 9) + 1); // Jei nera ka blokuoti, laimeti. Dedama random vietoje.
					if (A[DetiRand] != 'X' && A[DetiRand] != 'O'){
						document.getElementById(DetiRand).innerHTML = 'O';
						moves++;
					}
					else{
						AI();
					}
			}