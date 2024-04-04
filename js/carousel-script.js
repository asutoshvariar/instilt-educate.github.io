$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        center:true,
        nav:true,
        dots:true,
        autoplay:false,
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

// $(document).ready(function() {
//     // Loop through each image div
//     for (let i = 0; i < 10; i++) {
//         // Create the div element
//         let sliderCardDiv = $('<div>').addClass('slider-card');
//         // Create the inner div
//         let innerDiv = $('<div>').addClass('d-flex justify-content-center align-items-center mb-4');
//         // Create the image element
//         let imgElement = $('<img>').attr('src', 'assets/img/our_model_carousel/img' + i + '.png')
//                                     .attr('alt', '#')
//                                     .css({'width': '100rem', 'height': '250px'});
//         // Append image to inner div
//         innerDiv.append(imgElement);
//         // Append inner div to slider card div
//         sliderCardDiv.append(innerDiv);
//         // Append slider card div to owl-carousel
//         $('.owl-carousel').append(sliderCardDiv);
//     }
// });