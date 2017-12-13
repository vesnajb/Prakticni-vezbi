// window.onload = function(){
// 	document.getElementById("theLink").addEventListener("click", gotToYahoo);
// 	document.getElementById("theLink").addEventListener("middleclick", gotToYahoo_Blank);
// 	document.getElementById("theLink").addEventListener("contextmenu", showContext);
// }

// function goToYahoo(){
// 	this.href = "https://www.yahoo.com/";
// }

// function goToYahoo_Blank(){
// 	this.href = "https://www.yahoo.com/";
// 	this.target = "_blank";
// }

// function showContext(event){
// 	event.preventDefault();
// }

window.onload = function(){

// var naslov = document.getElementById("test");
// 	console.dir(naslov);
// 	naslov.innerHTML = "Bye";

// var slika = document.getElementsByTagName("img");
// 	console.dir(slika);
// 	slika.src = "https://goo.gl/images/vzFMKx";

	// var kopce = document.getElementsByClassName("kopce")[0];
	// kopce.addEventListener("click", showDate);
	// function showDate(){
	// 	document.querySelectorAll(".rezultat")[0].innerHTML = new Date();
	// }

	document.querySelectorAll("button")[0].addEventListener("click", colorSpan);

	function colorSpan(){
		document.querySelectorAll("span")[0].style.color = "red";
	}

}