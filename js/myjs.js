$(document).ready(function()
{
	$('#slider1').tinycarousel({ interval: true });
	$('.aboutme').click(function(event){
		$('.all').fadeIn();
		event.preventDefault();
	});
	$('#close').click(function(event){
		$('.all').fadeOut();
		event.preventDefault();
	});

});