$(document).ready(function() {
	console.log("guide ready");
		
	$(".show_markup").click(function(){
	    $(this).next(".markup").toggleClass("show");
	    if ($(this).html() == "Show Markup" ) {
	    	$(this).html("Hide Markup");
	    } else {
	    	$(this).html("Show Markup");
	    }
	});

	$(".show_CSS").click(function(){
	    $(this).next(".css").toggleClass("show");
	    if ($(this).html() == "Show LESS" ) {
	    	$(this).html("Hide LESS");
	    } else {
	    	$(this).html("Show LESS");
	    }
	});

	$(".show_JS").click(function(){
	    $(this).next(".js").toggleClass("show");
	    if ($(this).html() == "Show Scripts" ) {
	    	$(this).html("Hide Scripts");
	    } else {
	    	$(this).html("Show Scripts");
	    }
	});

	$(".alpha-toggle h3").click(function(){
		$(".alpha").toggleClass("show");
		if ($(this).html() == "Show 10% Alpha scale colors" ) {
	    	$(this).html("Hide 10% Alpha scale colors");
	    } else {
	    	$(this).html("Show 10% Alpha scale colors");
	    }
	});

	$(".shades-toggle h3").click(function(){
		$(".shades").toggleClass("show");
		if ($(this).html() == "Show Shade colors" ) {
			$(this).html("Hide Shade colors");
	    } else {
	    	$(this).html("Show Shade colors");
	    }
	});
});