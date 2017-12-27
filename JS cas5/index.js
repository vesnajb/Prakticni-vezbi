///Fetch

fetch("https://jsonplaceholder.typicode.com/albums")


	// .then(function(response){

	// 	if(response.status !==200){
	// 	console.log('Error Fatching Files');
	// 	return;
	// }

	// 	return response.json();

	
	// })

	// .then(function(data){
	// 	console.log(data);
	

	// var table = document.createElement('table');
	// var tr = document.createElement('tr');
	// var headers = Object.keys(data[0]);

	// for(var i = 0; i < headers.length; i++){
	// 	var header = headers[i];
	// 	var th = document.createElement("th");
	// 	th.appendChild(document.createTextNode(header));
	// 	tr.appendChild(th);
	// 	th.style.textTransform = "capitalize";
	// }

	// table.appendChild(tr);
	// table.setAttribute("cellpadding", "20");
	// table.setAttribute("border", "1");
	// table.style.textAlign = "center";



	// data.forEach(function(row){
	// 	tr = document.createElement("tr");

	// 	for(var i= 0 ; i< headers.length; i++){
	// 		var header = headers[i];
	// 		var td = document.createElement("td");

	// 		td.appendChild(document.createTextNode(row[header]));
	// 		tr.appendChild(td);
	// 		td.style.textTransform = "capitalize";

	// 	}

	// 		table.appendChild(tr);
	// })

	// document.body.appendChild(table);

	// })

	.then(function(response){
		return response.json();// obraboti gi
	})
	.then(function(data){
		var ul = document.createElement('ul');

		data.forEach(function(v){
		
		var li = document.createElement('li');
		var h3 = document.createElement('h3');
		var p = document.createElement('p');
		var span = document.createElement('span');

		p.innerText = "UserId: " + v.userId;
		span.innerText = "Id: " + v.id;
		h3.innerText = "Title: " + v.title;
		
		
		li.appendChild(p);
		li.appendChild(span);
		li.appendChild(h3);
				
		ul.appendChild(li);
		li.style.listStyle = "none";
		h3.style.fontSize = "15px";
		h3.style.fontWeight = "300";

	});	

		document.body.appendChild(ul);
		
	});
		
