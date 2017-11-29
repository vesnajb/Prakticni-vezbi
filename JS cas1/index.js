function comparison(num1, num2){
	if(num1>num2){
	console.log('The numbers are '+ num1 + " and " + num2 +"."+" The number "+num1+" is larger than "+ num2 + '.');
}
	else if(num1<num2){
		console.log('The numbers are '+ num1 + " and " + num2+'.'+" The number "+ num1+' is smaller than number '+ num2 + '.');
	}
	else{
		console.log('The numbers are '+ num1 +" and "+ num2 + '.' + " The numbers are equal.");
	}
}
comparison(3,3);


function calculateDogAge(age){
	console.log('The dog has '+ age*7 + ' human years.');
}
calculateDogAge(4);

function c2f(c){
	console.log(c+' C'+' ,' + (c*1.8+32)+ ' F')
}
c2f(10);


function temp(num,type){
	if(type=='c2f'){
		console.log(num+'C'+' ,'+ (num*1.8+32) +'F');
	}
	else if(type=='f2c'){
		console.log(num+ ' F' + ' ,' + Math.round((num-32)/1.8) + ' C');
	}
	else{
		console.log('The type is not defined.')
	}
}
temp(15,'f2c');


function even(num){
	if (num%2==0){
	console.log('The number is even.');
}
	else{
	console.log('The number is odd.');
}
}
even(24);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round


// else if(typeof == 'string')
// else if(typeof != 'number'){
// 	console.log('Type number.')
// }