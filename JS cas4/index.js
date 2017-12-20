function drawElement(el, txt){
	var creator = document.createElement(el);
	creator.appendChild(document.createTextNode(txt));
	document.body.appendChild(creator);
	if (el == "a"){
		creator.setAttribute("href", "https://www.google.com");
	} else if(el == "img"){
		creator.setAttribute('src', "images/photo.jpg");
	}
};

drawElement("a", "Hello World");
drawElement("h3", "Hello World");
drawElement("img", "Hello World");




// document.querySelectorAll("ul li");

// for (var i = 0; i < items.length; i++){
// 	items[i].addEventListener("click", enlarge);
// }

// function enlarge(){
// 	this.classList.toggle("enlarge");
// }


var h2 = document.createElement("h2");
var div = document.createElement("h2");
var img = document.createElement("img");

img.src = ;

h2.appendChilddocument.createTextNode()