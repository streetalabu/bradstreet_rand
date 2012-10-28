
Shadowbox.init({
       		handleOversize: "resize",
    	});
    	
$(function(){
		$('#mySlideContent').css('display','none');
		$('#mySlideToggler').click(function(){
			$('#mySlideContent').slideToggle('slow');
			$(this).toggleClass('slideSign');
			return false;
		});
		$('.collapse').click(function(){
			$('#mySlideContent').slideToggle('slow');
			$('#mySlideToggler').toggleClass('slideSign2');
			return false;
		});
	});