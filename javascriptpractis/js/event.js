(function(){
	alert("bigan");
	var buttons=document.getElementsByTagName("button");
	var buttonClick=function(){
		var className=this.innerHTML.toLowerCase();
		document.body.className = className;
	};
	for (var i = 0,len=buttons.length; i < len; i=i+1) {
		buttons[i].addEventListener("click", buttonClick,false);
		buttons[i].addEventListener("click",function(){alert("hi");},false);

		buttons[i].removeEventListener("click", buttonClick,false);
		
	}

	}());