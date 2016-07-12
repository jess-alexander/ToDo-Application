

$("li").click(function(){  // check off specific todos by clicking

	//console.log($(this).css("color"));//console.log to see what the css color attribute returns exactly 

	if($(this).css("color")==="rgb(128, 128, 128)"){ //if li is grey, turn it black
		$(this).css({  //create an object 
		color: "black",
		textDecoration: "none" //use Javascript friendly camelCase to define text-Decoration
		})
	}else{//else, turn it grey
		$(this).css({  //create an object 
		color: "grey",
		textDecoration: "line-through" //use Javascript friendly camelCase to define text-Decoration
	})
	}
		
});
