$("ul").on("click", "li", function(){
	$(this).toggleClass("done");
});

$("ul").on("click", "span", function(){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});	


//ADD TO DO
$("input[type=text]").keypress(function(event){
	//check, if event's char is ENTER,
	if(event.which === 13){ //13 means ENTER
		//grab the input
		var textInput = $(this).val(); //this -> $("input[type=text]")
		//empty text field
		$(this).val("");
		//add to list
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" +textInput+ "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});