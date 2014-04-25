function getWindowSize() {
	var phonesWidth = $(".phones-offices .dropdown-toggle").outerWidth();
	$(".phones-offices .dropdown-menu ul").css({
		'width' : phonesWidth
	});
}

$(document).ready(function(){

	$('#slider-testimonies').cycle({
		fx: 'fade',
		speed: 300,
		timeout: 5000, 
		slides: '>div',
		prev:   '#slider-testimonies-prev', 
		next:   '#slider-testimonies-next',
		slideActiveClass : 'active',
		pager:  '#slider-testimonies-pager',
		pagerTemplate: "<a href=#> {{slideNum}} </a>",
		pagerActiveClass: 'active',
		autoHeight: 'container'
	});
	$('#slider-featured').cycle({
		fx: 'fade',
		speed: 300,
		timeout: 5000, 
		slides: '>div',
		prev:   '#slider-featured-prev', 
		next:   '#slider-featured-next',
		slideActiveClass : 'active',
		pager:  '#slider-featured-pager',
		pagerTemplate: "<a href=#> {{slideNum}} </a>",
		pagerActiveClass: 'active'
	});

	$('#slider-more-news').cycle({
		fx: 'fade',
		speed: 300,
		timeout: 5000, 
		slides: '>div',
		prev:   '#slider-more-news-prev', 
		next:   '#slider-more-news-next',
		slideActiveClass : 'active'
	});

	$('body').on('shown.bs.dropdown', '.mobile-menu-container',function(e) {
	  $('body').addClass('dropdown-open');
	  $(".mobile-menu-container .dropdown-toggle i").removeClass('paragraph-justify-1');
	  $(".mobile-menu-container .dropdown-toggle i").addClass('x-1');
	  $('body').on('hidden.bs.dropdown', function(e) {
	    $('body').removeClass('dropdown-open');
	    $(".mobile-menu-container .dropdown-toggle i").addClass('paragraph-justify-1');
	    $(".mobile-menu-container .dropdown-toggle i").removeClass('x-1');
	  });
	});

	$('body').on('shown.bs.dropdown', '.phones-offices',function(e) {
	  $('body').addClass('dropdown-open');
	  $('body').on('hidden.bs.dropdown', function(e) {
	    $('body').removeClass('dropdown-open');
	  });
	});
	getWindowSize();
});



$(window).on("resize", function(){
	getWindowSize();
});