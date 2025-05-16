function checkDays(y) {
	if( Y%4==0){
		console.log("366");
	}
	else{
		console.log("365");
	}
	
}

let readline=require('readline');

let  rl=readline.createInterface
({
	input:process.stdin,
	output:process.stdout
});

rl.questions('Enter a number :',(input)=>{

	const year=parseInt(input)
			 checkDays(year);
})
