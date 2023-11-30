$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        center:true,
        nav:true,
        autoplay:true,
        autoplayTimeout:3000,
        responsive:{
            0:{
                items:1,
                
            },
            600:{
                items:3,
               
            },
            1000:{
                items:3,
                
            }
        }
    }) 
})

//Prevent autoplay when user clicks
$('.owl-carousel').on('touchstart', 'img', function(e) {
	$(this).closest('.owl-carousel').trigger('stop.owl.autoplay');
});
$('.owl-carousel').on('touchend', 'img', function(e) {
	$(this).closest('.owl-carousel').trigger('play.owl.autoplay');
});
$('.owl-carousel').on('click', '.owl-dots, .owl-nav', function(e) {
	$(this).closest('.owl-carousel').trigger('stop.owl.autoplay');
	$(this).closest('.owl-carousel').trigger('play.owl.autoplay');
});

//Change transition style for mobile
    $('.slider-card').addClass('fadeIn');
    $('.slider-card').addClass('fadeOut');
    // $('.slider.slider-card').css('transform'); is returning an undefined value for some reason
    $('.slider.slider-card').removeProp('transform');
    $('.slider .owl-item.active.center .slider-card').removeProp('transform');


// dynamically adding animation as shown below did not work
// if ($(window).innerWidth < 641) {
//     $('.owl-carousel').owlCarousel({
//         animateOut: 'fadeIn',
//         animateIn: 'fadeOut',
//         items:1,
//         stagePadding:30,
//         smartSpeed:450
//     });
// }