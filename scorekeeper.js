var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");


var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 0;


var p1h1 = document.querySelector("#score1");
var p2h1 = document.querySelector("#score2");


p1Button.addEventListener("click", function() {
	if (!gameOver){
 		p1Score++;
 		if (p1Score === winningScore){
 			p1h1.classList.add("winner");
 			gameOver = true;
 			
 	}
 	p1h1.innerHTML = p1Score;
	 	}
});

p2Button.addEventListener("click", function() {
	if (!gameOver){
 		p2Score++;
 		if (p2Score === winningScore){
 			p2h1.classList.add("winner");
 			gameOver = true;
 			
 	}
 	p2h1.innerHTML = p2Score;
	 	}
});


resetButton.addEventListener("click", reset);

function reset(){
	p1Score = 0;
	p2Score = 0;
	gameOver = false;
	p1h1.innerHTML = p1Score;
	p2h1.innerHTML = p2Score;
	p1h1.classList.remove("winner");
	p2h1.classList.remove("winner");
}



numInput.addEventListener("change", function() {
	var winningScoreValue = Number(numInput.value);
	winningScoreDisplay.innerHTML = winningScoreValue;
	winningScore = winningScoreValue;
	reset();
});
