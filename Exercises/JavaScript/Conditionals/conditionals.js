var age = Number(prompt("Enter your age:"));

if(age <= 0){
	console.log("ERROR!");
}

if(age === 21){
	console.log("Happy 21st birthday!");
}

if(age % 2 === 1){
	console.log("your age is odd");
}

if( age % Math.sqrt(age) === 0 ){
	console.log("your age is a perfect aquare!");
}