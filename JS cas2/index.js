for(var i = 0; i <= 10; i++){
	console.log('Current count is: '+ i);
};

for(var i=1; i<=10; i++){
	if(i % 2===0){
		console.log(i +' is even');
	}
	else{
		console.log(i + ' is odd');
	}
};

var buildMountain=function(){
	var result ="";

	var ground=function(size){
		for(var i=0; i<size; i++){
			result+="_";
		};
	}

	var peaks = function(size){
		result +="/";
		for(var i = 0; i<size; i++){
			result +="'";
		}
		result+="\\";
	};

	ground(5);
	peaks(3);
	ground(8);
	peaks(6);
	ground(8);

	return result;
	}	
console.log(buildMountain());


// var names=['pero', 'petko', 'kristijan', 'dimitar', 'andreja', 'aleksandar', 'nikola'];
// function ime(names){
// for (var i=0; i<names.length; i++){
// 	if (names[i].length==5){
// 		console.log(names[i]);
// 	};
// }
// }


var names=['pero', 'petko', 'kristijan', 'dimitar', "vesna", 'andreja', 'aleksandar', 'nikola'];
for (var i = 0; i <names.length; i++) {
	if (names[i].length==5){
		console.log(names[i]);
	}
}

function countletters(letters, char){
	var b=0;
	for (var i = 0; i<letters.length; i++){
		if(letters.charAt(i)==char){
			b=b+1;
			}	
		}
		console.log(b);
		return b;
}

countletters("KJKHJHFGYFVHJFYVHJGHJFGCVGFGHFVYHJVGJNBJBIBFYUVYYTT", "G");

for (var i=5; i<=50; i=i+5){
	console.log(i);
}

for (var i=100; i>=0; i--){
	console.log(i);
}

for (var i=0; i<=10; i++){
	console.log(i*9);
}

var grade="A";

switch(grade){
	case "A":
	console.log("Great work");
	break;
	case "B":
	console.log("Very good work");
	break;
	case "C":
	console.log("Good work");
	break;
	case "D":
	console.log("Graet work");
	break;
}