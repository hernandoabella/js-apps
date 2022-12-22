function initialise(){
		var obj = new Game();
	}
	

	function Game(){

		//start timer
		//generate map
		//assign first treasure to map
		//score reset to 0

		var score = 0;
		var lives = 10;

		//when timer reaches 0
		//display game over message
		var startBtn = document.getElementById("start-button");
		startBtn.style.display = "none";

		let health = document.getElementById("health");
		health.value = 10;

		document.getElementById("demo3").innerHTML = score;
		document.getElementById("demo4").innerHTML = "";
		document.getElementById("rules").innerHTML = "";

		var previousgameover = document.getElementById("gameover");

			if(previousgameover){
				previousgameover.remove();
			}

		var gameover = document.createElement("p");
		gameover.id = "gameover";
		gameover.className = "col-sm-12 col-md-12 col-lg-12";
		document.getElementById("board").appendChild(gameover);

		document.getElementById("gameover").innerHTML = "";

		//initialise treasure coordinates
		var x;
		var y;

		var map = [
		    ['A1', 'A2', 'A3', 'A4', 'A5'],
		    ['B1', 'B2', 'B3', 'B4', 'B5'],
		    ['C1', 'C2', 'C3', 'C4', 'C5'],
		    ['D1', 'D2', 'D3', 'D4', 'D5'],
		    ['E1', 'E2', 'E3', 'E4', 'E5']
			];

		function renderMap(){

			var previousgame = document.getElementById("game");

			if(previousgame){
				previousgame.remove();
			}

			var game = document.createElement("div");
			game.id = "game";
			game.className = "col-sm-12 col-md-12 col-lg-12";
			document.getElementById("board").appendChild(game);

			// loop the outer array
			
			for (var i = 0; i < map.length; i++) {
			    // get the size of the inner array
			    var innerArrayLength = map[i].length;
			    // loop the inner array
			    for (var j = 0; j < innerArrayLength; j++) {
			        console.log('[' + i + ',' + j + '] = ' + map[i][j]);
			        var btn = document.createElement("BUTTON");        // Create a <button> element
					btn.className = "game-button";
					btn.id = map[i][j];
					btn.onclick = checkTreasure;
					//var t = document.createTextNode(map[i][j]);       // Create a text node
					//btn.appendChild(t);                                // Append the text to <button>
					document.getElementById("game").appendChild(btn);

					var isMultipleof4 = function (n) 
					{ 
					    if ( n == 0 ){ 
					    	return false; 
						}
						else{
					    	while ( n > 0 )
					    	{ 
					        	n = n - 4; 
						  	}

						    if ( n == 0 ){ 
						        return true; 
						  	}
						  	else{
						    	return false;
						    }
						} 
					}
					
					if ( isMultipleof4(j) == true ){
						var br = document.createElement("div");
						br.className = "clear";
						document.getElementById("game").appendChild(br);
					}
			    }
			}
		}

		function assignTreasure(){
			var m = new renderMap();
			x = Math.floor(Math.random()*map.length);
			y = Math.floor(Math.random()*map.length);

			//document.getElementById("demo").innerHTML = "Current Treasure: " + map[x][y];
			//document.getElementById("demo5").innerHTML = "X: " + x + " Y: " + y;
			
		}
			
		assignTreasure();

		function checkLives(){
			lives = lives - 1;

			if(lives == 0){

					document.getElementById("gameover").innerHTML = "GAME OVER";
					document.getElementById("gameover").style.color = "red";
					document.getElementById("demo3").innerHTML = score;
					health.value -= 1;
					var elems = document.getElementsByClassName("game-button");
					for(var i = 0; i < elems.length; i++) {
					    elems[i].disabled = true;
					}
					startBtn.style.display = "block";
				}
				else{
					health.value -= 1;
				} 
		}

		function checkTreasure(){
			//if coordinates of this button equals cocordinates of current treasure
			//then increase player's score
			//update score and or how close to treasure

			//if clicked button is hiding the treasure 
			if(this.id == map[x][y]){
				score = score + 1000;
				document.getElementById("demo3").innerHTML = score;
				document.getElementById("demo4").innerHTML = "Success! Found some gold!";
				document.getElementById("demo4").style.color = "green"
				//assign another treasure to different location
				document.getElementById("game").remove();
				assignTreasure();
				checkLives();
			}
			//else if clicked button is close to treasure
			else
			{ 
					var a = map.length;
					//var b = map[a].length;

					//control variables incase they go out of range of array
					var xplus = x + 1; if(xplus == a){ xplus = a - 1;}
					var xminus = x - 1; if(xminus == -1){ xminus = 0;}
					var yplus = y + 1; if(yplus == a){ yplus = a - 1;}
					var yminus = y - 1; if(yminus == -1){ yminus = 0;}
					
					//specify how close the clicked button is to the treasure  
  					var topleft = map[xminus][yminus];
					var topmid = map[xminus][y];
					var topright = map[xminus][yplus];
					var midleft = map[x][yminus];
					var midright = map[x][yplus];
					var bottomleft = map[xplus][yminus];
					var bottommid = map[xplus][y];
					var bottomright = map[xplus][yplus];

  					if(this.id == topleft || 
  						this.id == topmid ||
  						this.id == topright ||
  						this.id == midleft ||
  						this.id == midright ||
  						this.id == bottomleft ||
  						this.id == bottommid ||
  						this.id == bottomright )
  					{
  						document.getElementById("demo4").innerHTML = "You are warm.";
  						document.getElementById("demo4").style.color = "orange"
						this.style.backgroundColor = "yellow";
						this.disabled = true;
						checkLives();
  					}
  					//otherwise tell player they are far away
  					else{
						document.getElementById("demo4").innerHTML = "Cold.. Keep trying.";
						document.getElementById("demo4").style.color = "red";
						this.style.backgroundColor = "red";
						this.disabled = true;
						checkLives();
					}
  			} 

  				
		}
				

				
				
				
			
			 
		
	
	}