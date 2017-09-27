$(document).ready(function(){

	$('.ba-slider').slick({
		'dots': false,
		'infinite': true,
		'slidesToShow': 3,
		'centerMode': false,
		'variableWidth': true,
		'autoplay': true, 
		'autoplaySpeed': 1000, 
		'speed': 1000,
		'pauseOnHover': true,
		'nextArrow': '<a href="#" class="ba-slider__button ba-slider__button--next">Next</a>',
  		'prevArrow': '<a href="#" class="ba-slider__button ba-slider__button--prev">Previous</a>'

	});

});