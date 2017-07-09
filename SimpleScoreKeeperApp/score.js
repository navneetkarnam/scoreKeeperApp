var p1button = document.querySelector("#p1");
var p2button = document.getElementById("p2");
var p1display = document.querySelector("#p1display");
var p2display = document.querySelector("#p2display");
var resetbutton = document.getElementById("reset");
var numInput = document.querySelector("input");
var winningScore = document.querySelector("p span");
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winScore = 5;

p1button.addEventListener("click", function(){
	// alert("clicked!")
	if(!gameOver){
	p1score++;
		if(p1score === winScore){
			// console.log("gameOver");
			gameOver = true;
			p1display.classList.add("winner");
			p2display.classList.add("loser");

		}
	// console.log(p1score);
	p1display.textContent = p1score;
}
});

p2button.addEventListener("click", function(){
	// alert("clicked!")
	if(!gameOver){

	p2score++;
		if(p2score === winScore){
			gameOver = true;
			p1display.classList.add("loser");
			p2display.classList.add("winner");		
		}
	// console.log(p2score);
	p2display.textContent = p2score;
}
});

resetbutton.addEventListener("click", function(){
	reset();
});

function reset(){
	p1score = 0;
	p2score = 0;
	p1display.textContent = 0;
	p2display.textContent = 0;
	p1display.classList.remove("winner");
	p1display.classList.remove("loser");
	p2display.classList.remove("winner");
	p2display.classList.remove("loser");
	gameOver = false;
}

numInput.addEventListener("change", function(){
	// console.log("changed");
	winningScore.textContent=this.value;
	winScore = Number(this.value);
	reset();
});
