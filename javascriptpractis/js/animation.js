(function(){
 var speed=10,
 moveBox=function(moveBy){
 	var e1=document.getElementById("box"),
 	left=e1.offsetLeft;
 	
 		if((moveBy>0 && left>399) || (moveBy<0 && left<51))
 	{
 		clearTimeout(time);
 		time=setInterval(function()
 		{
 			moveBox(moveBy * -1);
 		},speed);
 	}
 	e1.style.left=left+moveBy+"px";
 };
 var time= setInterval(function()
 { moveBox(3);
 },speed);
}());
