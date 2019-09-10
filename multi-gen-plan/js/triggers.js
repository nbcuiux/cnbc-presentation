$(function() {
	$('.nav__container, .overlay').on('click', function () {
		$('body').toggleClass('active');
	});
	$('.timeline-phase-1').on('click', function () {	
		var elemTo = $('.st-header').eq(0);
		$('html, body').animate({
			scrollTop: elemTo.offset().top
		}, 500);
  	});
  	$('.timeline-phase-2').on('click', function () {	
		var elemTo = $('.st-header').eq(1);
		$('html, body').animate({
			scrollTop: elemTo.offset().top
		}, 500);
  	});
  	$('.timeline-phase-3').on('click', function () {	
		var elemTo = $('.st-header').eq(2);
		$('html, body').animate({
			scrollTop: elemTo.offset().top
		}, 500);
  	});

  	//onresize oninit
  	
  	function addSpaceBelow() {
  		var phase3header = $('.st-header').eq(2).height();
  		var phase3body = $('#st-accordion3').height();
  		var windowH = $(window).height();
  		console.log(windowH + " : " + phase3body + " : " + phase3header);
  		var spacer = $('.spacer').css({ height : windowH - (phase3body) - 90 + 'px'});
  	}
  	addSpaceBelow();
  	$(window).resize($.proxy(addSpaceBelow, this));
});
