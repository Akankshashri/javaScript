(function(){
	var pElement=document.getElementsByTagName("p");
	alert(pElement.length);
	var e1= document.createElement("p");
	document.body.appendChild(e1);
	alert(pElement.length);
	}());
