window.onload = function(){

	// document.getElementById("theLink").addEventListener("click", goToYahoo);
	// document.getElementById("theLink").addEventListener("auxclick", goToYahoo_Blank);
	// document.getElementById("theLink").addEventListener("contextmenu", showContext);

	// console.dir(document.getElementById("theLink"));
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

	// var naslov = document.getElementById("test");
	// console.dir(naslov);
	// naslov.innerHTML = "Mario";

	// var slika = document.getElementsByTagName("img")[0];
	// console.dir(slika);
	// slika.src = "https://cdn.pixabay.com/photo/2017/06/23/16/57/tree-2435269_960_720.jpg";

	var kopce = document.getElementsByClassName("kopce")[0];

	kopce.addEventListener("click", showDate);

	function showDate(){
		document.querySelectorAll(".rezultat")[0].innerHTML = new showDate();
	}

	// document.querySelectorAll("BUTTON")[0].addEventListener("click", colorSpan);

	// function colorSpan(){
	// 	document.querySelectorAll("SPAN")[0].style.color = "red";
	// }

	// function test(name){
	// 	console.dir("Hello " + name);
	// }


	// test("Mario");

	 function presmetaj(){
  	var prvBroj = document.LiveCalculator.Broj1.value;
 	var vtorBroj = document.LiveCalculator.Broj2.value;
 	var rezultat = parseFloat(prvBroj) + parseFloat(vtorBroj);
 	document.LiveCalculator.Rezultat.value = rezultat;
 }


}