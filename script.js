$(document).ready(function(){
  $('.slider').slick({
	infinite : true,
	arrows : false,
	dots : true,
	dotsClass : 'dot',
		responsive : [{
    	breakpoint : 799,
    	settings : {
    		dots: false
    	}
    }]
	})

});

$(window).scroll(function(){

	var fix = $('.main-menu')

	if ($(this).scrollTop() > 700){
		fix.addClass('fixed')
	}
	else{
		fix.removeClass('fixed')
	}
});

  $('.work-images').magnificPopup({
  		delegate: 'a', 
  		type: 'image'
});

$('.hidden-button').click(function(){
	$('.menu').toggleClass('drop-down')
});


