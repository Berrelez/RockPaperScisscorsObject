(function(){
	
	var playerWins = 0;
	var computerWins = 0;
	console.log("Loading variables and setting objects");
	document.getElementById('playerWins').innerHTML = parseInt(playerWins,0).toString();
	document.getElementById('computerWins').innerHTML = parseInt(computerWins,0).toString();
	
	var Game = function(){
	
		console.log("starting game");
		this.items = ['Rock','Paper','Scissors']; 
		
	};

	Game.prototype.start = function (){
		console.log("Starting game");
	}
	
	Game.prototype.play = function(playerItem){
		
		var computerChoice = Math.floor(Math.random() * 3);
		this.computerItem = this.items[computerChoice]; 
	
		if(playerItem === 'Rock' && this.computerItem === 'Rock'){
			document.getElementById('result').innerHTML = "It''s a tie!!";
			document.getElementById('result').className = "alert alert-warning text-center";
		}else if(playerItem === 'Rock' && this.computerItem === 'Paper'){
			document.getElementById('result').innerHTML = this.computerItem + " beats " + playerItem + "! You lose!";
			document.getElementById('result').className = "alert alert-danger text-center";
			increment('computer');
		}else if(playerItem === 'Rock' && this.computerItem === 'Scissors'){
			document.getElementById('result').innerHTML = playerItem + " beats " + this.computerItem + "! You Win!";
			document.getElementById('result').className = "alert alert-success text-center";
			increment('player');
		}
		
		if(playerItem === 'Paper' && this.computerItem === 'Paper'){
			document.getElementById('result').innerHTML = "It''s a tie!!";
			document.getElementById('result').className = "alert alert-warning text-center";
		}else if(playerItem === 'Paper' && this.computerItem === 'Scissors'){
			document.getElementById('result').innerHTML = this.computerItem + " beats " + playerItem + "! You lose!";
			document.getElementById('result').className = "alert alert-danger text-center";
			increment('computer');
		}else if(playerItem === 'Paper' && this.computerItem === 'Rock'){
			document.getElementById('result').innerHTML = playerItem + " beats " + this.computerItem + "! You Win!";
			document.getElementById('result').className = "alert alert-success text-center";
			increment('player');
		}

		if(playerItem === 'Scissors' && this.computerItem === 'Scissors'){
			document.getElementById('result').innerHTML = "It''s a tie!!";
			document.getElementById('result').className = "alert alert-warning text-center";
		}else if(playerItem === 'Scissors' && this.computerItem === 'Rock'){
			document.getElementById('result').innerHTML = this.computerItem + " beats " + playerItem + "! You lose!";
			document.getElementById('result').className = "alert alert-danger text-center";
			increment('computer');
		}else if(playerItem === 'Scissors' && this.computerItem === 'Paper'){
			document.getElementById('result').innerHTML = playerItem + " beats " + this.computerItem + "! You Win!";
			document.getElementById('result').className = "alert alert-success text-center";
			increment('player');
		}
	};
	
	window.RockPaperScissors = Game;
	
	function increment(winner){
		
		if(winner === 'player'){ 
			console.log('incrementing player wins');	
			playerWins ++; 
			document.getElementById('playerWins').innerHTML = parseInt(playerWins,0).toString(); 
		}else{ 
			console.log("increment computer wins");
			computerWins ++;  
			document.getElementById('computerWins').innerHTML = parseInt(computerWins,0).toString(); 
		}
	}
	
	Game.prototype.resetGame = function(){
			console.log("resetting game");
			
			playerWins = 0;
			computerWins = 0;
			document.getElementById('result').innerHTML = "Ready!";
			document.getElementById('result').className = "alert alert-info text-center";
			document.getElementById('playerWins').innerHTML = parseInt(playerWins,0).toString();
			document.getElementById('computerWins').innerHTML = parseInt(computerWins,0).toString();
		}


})();



