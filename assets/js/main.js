$(document).ready(function() {
	console.log("ready");
	
	$(".topNav li#user").click(function(){
		$(this).toggleClass("active");
	    $(this).find(".dropdown").toggleClass("expand");
	});

	$(".subNav li.reportSwitch").click(function(){
	    $(this).toggleClass("active");
	    $(this).find(".dropdown").toggleClass("expand");
	});

	$(".subNav li.chartSwitch").click(function(){
	    $(this).toggleClass("active");
	    $(this).find(".dropdown").toggleClass("expand");
	});

	$(".e360-faved").click(function(){
	    $(this).toggleClass("faved");
	});

	$(".sidePanel .title").click(function(){
	    $(this).next(".groupOptions").toggleClass("expand");
	    $(this).toggleClass("flip");
	    console.log("open sesame!");

	});

	$(".sidePanel .advancedToggle").click(function(){
	    $(this).toggleClass("active");
	    $(".sidePanel.advanced").toggleClass("expand");
	     $(".sidePanel.parameters").toggleClass("pushover");
	});

	$(".show_markup").click(function(){
	    $(this).next(".markup").toggleClass("show");
	    if ($(this).html() == "Show Markup" ) {
	    	$(this).html("Hide Markup");
	    } else {
	    	$(this).html("Show Markup");
	    }
	});

	$(".show_styles").click(function(){
	    $(this).next(".styles").toggleClass("show");
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


	/*  Allow user to enter edit mode by clicking on the edit icon
		or by clicking on the title itself. Exit edit mode by clicking
		OK or anywhere outside the input.
	*/
	$(".reportTitle textarea").focus(function(){
		$(".reportTitle .e360-edit").addClass("hide");
		console.log("hide edit");
		$(".reportTitle button.confirm").addClass("show");
		console.log("show confirm");
	});

	$(".reportTitle textarea").blur(function(){
		$(".reportTitle .e360-edit").removeClass("hide");
		$(".reportTitle button.confirm").removeClass("show");
	});

	$(".reportTitle .e360-edit").click(function(){
		$(".reportTitle textarea").focus();
		console.log("edit me");
	});

	$(".reportTitle button.confirm").click(function(){
		$(".reportTitle textarea").blur();
	});

	$(".pageTitle input").focus(function(){
		$(".editInput .e360-edit").addClass("hide");
		console.log("hide edit");
		$(".editInput button.confirm").addClass("show");
		console.log("show confirm");
	});

	$(".pageTitle input").blur(function(){
		$(".editInput .e360-edit").removeClass("hide");
		$(".editInput button.confirm").removeClass("show");
	});

	$(".pageTitle .e360-edit").click(function(){
		$(".editInput input").focus();
		console.log("edit me");
	});

	$(".pageTitle button.confirm").click(function(){
		$(".editInput input").blur();
	});

	function makeExpandingArea(container) {
		var area = container.querySelector('textarea');
		var span = container.querySelector('span');
		if (area.addEventListener) {
			area.addEventListener('input', function() {
				span.textContent = area.value;
			}, false);
			span.textContent = area.value;
		} else if (area.attachEvent) {
		// IE8 compatibility
		area.attachEvent('onpropertychange', function() {
			span.innerText = area.value;
		});
			span.innerText = area.value;
		}
		// Enable extra CSS
		container.className += " active";
	} 
	var areas = document.querySelectorAll('.reportTitle');
	var l = areas.length;while (l--) {
		makeExpandingArea(areas[l]);
	}

	/*Select all in legend*/
	$('#legend_one .legend #select-all1').on('click',function(){
        if(this.checked){
            $('#legend_one .legend .legend-check').each(function(){
                this.checked = true;
                console.log("check on");
            });
        }else{
             $('#legend_one .legend .legend-check').each(function(){
                this.checked = false;
                console.log("check off");
            });
        }
    });
    $('#legend_one .legend .legend-check').on('click',function(){
        if($('#legend_one .legendList .legend-check:checked').length == $('#legend_one .legendList .legend-check').length){
            $('#legend_one .legend #select-all1').prop('checked',true);
            console.log("all checked");
        }else{
            $('#legend_one .legend #select-all1').prop('checked',false);
            console.log("all NOT checked");
        }
    });

    /*in scrolling legend */
    $('#scroll .legend #select-all3').on('click',function(){
        if(this.checked){
            $('#scroll .legend .legend-check').each(function(){
                this.checked = true;
                console.log("check on scroll");
            });
        }else{
             $('#scroll .legend .legend-check').each(function(){
                this.checked = false;
                console.log("check off scroll");
            });
        }
    });
    $('#scroll .legend .legend-check').on('click',function(){
        if($('#scroll .legendList .legend-check:checked').length == $('#scroll .legendList .legend-check').length){
            $('#scroll .legend #select-all3').prop('checked',true);
            console.log("all checked in scroll");
        }else{
            $('#scroll .legend #select-all3').prop('checked',false);
            console.log("all NOT checked in scroll");
        }
    });
	
	/*Select all in hidden switches list*/
    $('.hiddenSwitches .select-all').on('click',function(){
        if(this.checked){
            $('.hiddenSwitches .legend-check').each(function(){
                this.checked = true;
            });
        }else{
             $('.hiddenSwitches .legend-check').each(function(){
                this.checked = false;
            });
        }
    });
    
    $('.hiddenSwitches .legend-check').on('click',function(){
        if($('.legend-check:checked').length == $('.legend-check').length){
            $('.hiddenSwitches .select-all').prop('checked',true);
        }else{
            $('.hiddenSwitches .select-all').prop('checked',false);
        }
    });

    $(".reportLegend .hiddenCount").click(function(){
	    $(this).toggleClass("active");
	    $(this).find(".dropdown").toggleClass("expand");
	});

});