var goal = 34;

while(true){
	var usrInput = Number(prompt("Guess a number:"));

	if(usrInput < goal){
		alert("Too Low. Try Again.");
	}else if(usrInput > 34){
		alert("Too High. Try Again.");
	}else if(usrInput ===  goal){
		alert("You guessed it!");
		break;
	}
}