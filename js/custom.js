
(function($) {
	"use strict";
//For background slider
$(function() {

	$( '#ri-grid' ).gridrotator( {
		rows		: 4,
		columns		: 8,
		animType	: 'fadeInOut',
		animSpeed	: 1000,
		interval	: 600,
		step		: 1,

		w1024		: {
			rows	: 5,
			columns	: 6
		},
		w768		: {
			rows	: 7,
			columns	: 4
		},
		w480		: {
			rows	: 4,
			columns	: 3
		},
		w320		: {
			rows	: 4,
			columns	: 2
		},
		w240		: {
			rows	: 4,
			columns	: 2
		}
	} );

});


// for portfoli filter jquary
$(window).load(function(){
    var $container = $('.portfolioContainer');
    $container.isotope({
        filter: '*',
        animationOptions: {
            duration: 750,
            easing: 'linear',
            queue: false
        }
    });

    $('.portfolioFilter a').click(function(){
        $('.portfolioFilter .current').removeClass('current');
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector,
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
         });
         return false;
    });
});




// for portfoli lightbox jquary
jQuery(function($) {
	/*var $chosenSheet,
	$stylesheets = $( "a[id^=theme-]" );

	// run rlightbox
	$( ".lb" ).rlightbox();
	$( ".lb_title-overwritten" ).rlightbox({overwriteTitle: true});*/
});





// for skill chat jquary
$(document).ready(function(e) {
//var windowBottom = $(window).height();
var index=0;
$(document).scroll(function(){
	var top = $('.technical').height()-$(window).scrollTop();
	console.log(top)
	if(top<-150){
		if(index==0){

			$('.chart').easyPieChart({
				easing: 'easeOutBounce',
				onStep: function(from, to, percent) {
					$(this.el).find('.percent').text(Math.round(percent));
				}
			});

		}
		index++;
	}
})
//console.log(nagativeValue)
});



// for banner height js
$(document).ready(function(e)  {
    var wi = $(window).width();

		var wi = $(window).width();

        if (wi <= 767){
			var windowWidth = $(window).width();
			var windowHeight =$(window).height();
            $('.banner').css({'height':windowHeight -"50" });
            }
        else if (wi >= 768){
			var windowWidth = $(window).width();
			var windowHeight =$(window).height();
            $('.banner').css({'height':windowHeight -"100" });
            }
});

// for banner height js
$(window).resize(function(){
  var wi = $(window).width();

		var wi = $(window).width();

        if (wi <= 767){
			var windowWidth = $(window).width();
			var windowHeight =$(window).height();
            $('.banner').css({'height':windowHeight -"50" });
            }
        else if (wi >= 768){
			var windowWidth = $(window).width();
			var windowHeight =$(window).height();
            $('.banner').css({'height':windowHeight -"100" });
            }
});




// Somth page scroll



$(document).ready(function(e)  {
  var wi = $(window).width();

		var wi = $(window).width();

        if (wi <= 767){
			$(function() {
			  $('a[href*=#]:not([href=#])').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				  var target = $(this.hash);
				  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				  if (target.length) {
					$('html,body').animate({
					  scrollTop: target.offset().top -30
					}, 1000);
					return false;
				  }
				}
			  });
			});
            }
        else if (wi >= 768){
			$(function() {
			  $('a[href*=#]:not([href=#])').click(function() {
				if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
				  var target = $(this.hash);
				  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
				  if (target.length) {
					$('html,body').animate({
					  scrollTop: target.offset().top -100
					}, 1000);
					return false;
				  }
				}
			  });
			});
            }
});





// chart loding
$(window).load(function() {

	var chart = window.chart = $('.chart').data('easyPieChart');
	$('.js_update').on('click', function() {
		chart.update(Math.random()*100);
	});
});

}(jQuery));

// Portfolio Modal
$(document).ready(function() {
	$('.portfolio-wrapper img').click(function(){
			$('.modal-body .portfolio-preview-title').empty();
			$('.modal-body .portfolio-preview-category').empty();
			$('.modal-body .portfolio-preview-summary').empty();
			$('.modal-body').find('.bx-wrapper').remove();

			var src = $(this).attr('src');
			var title = $(this).parent('.portfolio-wrapper').find('.text-title').text();
			var category = $(this).parent('.portfolio-wrapper').find('.text-category').text();
			var description = $(this).parent('.portfolio-wrapper').find('.preview-description').text();
			var slider = $(this).parent('.portfolio-wrapper').find('.preview-slider-images-list').html();

	  	$('#modal-portfolio-gallery .modal-title').html(title);

			$('.modal-body .preview-description-title').html(title);
			$('.modal-body .preview-description-category').html(category);
			$('.modal-body .preview-description-summary').html(description);


			$("<div></div>").attr('class','preview-slider-wrapper').appendTo(".modal-body .portfolio-image-preview");
			$(slider).appendTo(".preview-slider-wrapper");

	  	$('#modal-portfolio-gallery').modal({show:true});

			setTimeout(function(){
					$('.preview-slider-wrapper').bxSlider({
						pager: false,
						minSlides: 1,
						maxSlides: 1,
						slideMargin: 10,
						slideWidth : 600
					});
			}, 500);

	});

	$('#modal-portfolio-gallery').on('hidden.bs.modal', function () {
		$('.modal-body .bx-wrapper').remove();
		$('.modal-body .portfolio-image-preview .preview-slider-wrapper').remove();
	});

});
