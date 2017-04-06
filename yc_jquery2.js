$(document).ready(function(){
    $('.sliderHeader').owlCarousel({

        margin: 10,

        loop:true,

        items: 1,
        autoplay:true,

    });

    var owl = $(".sliderHeader").data('owlCarousel');

    $('.slider-next').click(function(){

        owl.prev();

    });

    $('.slider-prev').click(function(){

        owl.next();

    });

});
