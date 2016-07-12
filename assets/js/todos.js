

$("li").click(function(){  // check off specific todos by clicking
	$(this).toggleClass("completed");
});

$("span").click(function(event){ //click on X to delete ToDoß
	event.stopPropagation(); //stop bubble effect of also firing li click event

	$(this).parent().fadeOut(500,function(){ //fadeout the li, not the span
		$(this).remove(); //this is referring to the li, the parent of the click event
	});
});

$("input[type='text']").keypress(function(){
	
	if(event.which === 13){
		var todoText = $(this).val();//grab new toDo text from input

		$(this).val("");	//clear input
		$("ul").append("<li><span>X </span>" + todoText + "</li>"); //add a new LI to insert input into the HTML

		
	}
	

})