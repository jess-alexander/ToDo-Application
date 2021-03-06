

$("ul").on("click", "li", function(){  //Listener is added to the parent, in this case the UL
									   //read as "when an li is clicked, inside a ul" run this code.
	$(this).toggleClass("completed");  // check off specific todos by clicking
});

$("ul").on("click", "span", function(event){ //click on X to delete ToDoß
	event.stopPropagation(); //stop bubble effect of also firing li click event

	$(this).parent().fadeOut(500,function(){ //fadeout the li, not the span
		$(this).remove(); //this is referring to the li, the parent of the click event
	});
});

$("input[type='text']").keypress(function(){
	
	if(event.which === 13){
		var todoText = $(this).val();//grab new toDo text from input

		$(this).val("");	//clear input
		$("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i>  </span>" + todoText + "</li>"); //add a new LI to append input into the HTML
		
	}	
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});