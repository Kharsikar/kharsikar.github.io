

// 1. click on the scroll button - arrow in the header
	// select the thing with jquery
$('.scroll-btn').on('click', function(){
	// list of instructions inside
	console.log('hello world');


// 2. figure out the section we want to move to
// 3. check how far the section we want to go to is away from the top of the page.
	var introSection = $('.intro').offset().top;

	console.log(introSection);


// 4. animate our page down to that position 
	$('html, body').animate({
		scrollTop: introSection

	}, 600 );
})
