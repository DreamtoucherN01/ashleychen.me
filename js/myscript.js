$(function(){
	"use strict";//Start of use strict

	//jQuery for page scrolling feature - requires jQuery Easing plugin


	// Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    //inbody class
	var hash = $(this).find('li.active a').attr('href');
	if(hash !== '#home'){
		$('#nav nav').addClass('inbody');
	}else{
		$('#nav nav').removeClass('inbody');
	}

	//add an inbody class to nav when scrollspy event fires
	$('.navbar-fixed-top').on('activate.bs.scrollspy', function () {
		var hash = $(this).find('li.active a').attr('href');
		if(hash !== '#home'){
			$('#nav nav').addClass('inbody');
		}else{
			$('#nav nav').removeClass('inbody');
	    }
	});

	// add smooth animation with an offset
  	// jQuery for page scrolling feature - requires jQuery Easing plugin
    $(".navbar-nav li a[href^='#']").on('click', function(e) {
	   // prevent default anchor click behavior
	   e.preventDefault();

	   // store hash
	   var hash = this.hash;

	   // animate
	   $('html, body').animate({
	       scrollTop: $(this.hash).offset().top
	     }, 300, function(){

	       // when done, add hash to url
	       // (default click behaviour)
	       window.location.hash = hash;
	     });
	}); //--smooth scrolling 

	// Initialize and Configure Scroll Reveal Animation

    window.sr = ScrollReveal();
    sr.reveal('.resume_icon', {
        duration: 1000,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.sr-button', {
        duration: 1000,
        delay: 50
    });
    sr.reveal('.contact_icon', {
        duration: 1000,
        scale: 0.3,
        distance: '100px'
    }, 300);//--

})






