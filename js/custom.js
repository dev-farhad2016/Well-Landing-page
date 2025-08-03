// on ready function
  $(document).ready(function() {
	"use strict";
	
	
    // Preloader 
    jQuery(window).on('load', function() {
        jQuery("#status").fadeOut();
        jQuery("#preloader").delay(350).fadeOut("slow");
    });


	
	   $(document).ready(function(){
	   $(window).bind('scroll', function() {
	   var navHeight = $( window ).height() - 60;
			 if ($(window).scrollTop() > navHeight) {
				 $('.main-header').addClass('fixed');
			 }
			 else {
				 $('.main-header').removeClass('fixed');
			 }
		});
	});
	
	
	// ===== Scroll to Top ==== 
	$(window).scroll(function() {
		if ($(this).scrollTop() >= 100) {       
			$('#return-to-top').fadeIn(200);   
		} else {
			$('#return-to-top').fadeOut(200);  
		}
	});
	$('#return-to-top').on('click',function() {     
		$('body,html').animate({
			scrollTop : 0                
		}, 500);
	});
	
	// Main Slider Animation

        (function($) {

            //Function to animate slider captions 
            function doAnimations(elems) {
                //Cache the animationend event in a variable
                var animEndEv = 'webkitAnimationEnd animationend';

                elems.each(function() {
                    var $this = $(this),
                        $animationType = $this.data('animation');
                    $this.addClass($animationType).one(animEndEv, function() {
                        $this.removeClass($animationType);
                    });
                });
            }

            //Variables on page load 
            var $myCarousel = $('#carousel-example-generic,#carousel-example-generic2,#carousel-example-generic3,#carousel-example-generic4,#carousel-example-generic5,#carousel-example-generic6,#carousel-example-generic7'),
                $firstAnimatingElems = $myCarousel.find('.item:first').find("[data-animation ^= 'animated']");

            //Initialize carousel 
            $myCarousel.carousel();

            //Animate captions in first slide on page load 
            doAnimations($firstAnimatingElems);

            //Pause carousel  
            $myCarousel.carousel('pause');


            //Other slides to be animated on carousel slide event 
            $myCarousel.on('click slide.bs.carousel', function(e) {
                var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
                doAnimations($animatingElems);
            });


        })(jQuery);
		
		
	
		
		
		// CountDown Js
			var deadline = 'December 31 2022 23:59:59 GMT+0530';
				function time_remaining(endtime){
					var t = Date.parse(endtime) - Date.parse(new Date());
					var seconds = Math.floor( (t/1000) % 60 );
					var minutes = Math.floor( (t/1000/60) % 60 );
					var hours = Math.floor( (t/(1000*60*60)) % 24 );
					var days = Math.floor( t/(1000*60*60*24) );
					return {'total':t, 'days':days, 'hours':hours, 'minutes':minutes, 'seconds':seconds};
				}
				function run_clock(id,endtime){
					var clock = document.getElementById(id);
					
					// get spans where our clock numbers are held
					var days_span = clock.querySelector('.days');
					var hours_span = clock.querySelector('.hours');
					var minutes_span = clock.querySelector('.minutes');
					var seconds_span = clock.querySelector('.seconds');
		
					function update_clock(){
						var t = time_remaining(endtime);
						
						// update the numbers in each part of the clock
						days_span.innerHTML = t.days;
						hours_span.innerHTML = ('0' + t.hours).slice(-2);
						minutes_span.innerHTML = ('0' + t.minutes).slice(-2);
						seconds_span.innerHTML = ('0' + t.seconds).slice(-2);
						
						if(t.total<=0){ clearInterval(timeinterval); }
					}
					update_clock();
					var timeinterval = setInterval(update_clock,1000);
				}
				run_clock('clockdiv',deadline);
				
				

	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>');

		//Dropdown Button
		$('.main-header li.dropdown .dropdown-btn').on('click', function() {
			$(this).prev('ul').slideToggle(500);
		});
	}

	//Add One Page nav
	if($('.scroll-nav').length) {
		$('.scroll-nav ul.navigation').onePageNav();
	}
	
	//Hide Bootstrap Menu On Click over Mobile View
	$('.scroll-nav ul.navigation > li > a').on('click', function(){
		var windowWidth = $(window).width();
		if (windowWidth <= 767) {
			$('.nav-outer .navbar-toggle').trigger( "click" );
		}
	});
	
	
	// Scroll to a Specific Div
	if($('.scroll-to-target').length){
		$(".scroll-to-target").on('click', function() {
			var target = $(this).attr('data-target');
		   // animate
		   $('html, body').animate({
			   scrollTop: $(target).offset().top
			 }, 1000);

		});
	}
	
	
	 $(document).ready(function() {
            $('.try_rc_slider_inner_wrapper .owl-carousel').owlCarousel({
                loop: true,
                margin: 10,
                autoplay: false,
                responsiveClass: true,
                smartSpeed: 1200,
                navText: ['<i class="flaticon-left-arrow-1"></i>', '<i class="flaticon-right-arrow-1"></i>'],
                responsive: {
                    0: {
                        items: 1,
                        nav: true
                    },
					500: {
                        items: 2,
                        nav: true
                    },
                    700: {
                        items: 3,
                        nav: true
                    },
                    1000: {
                        items: 4,
                        nav: true,
                        loop: true,
                        margin: 20
                    }
                }
            })
        })

	
	
});	