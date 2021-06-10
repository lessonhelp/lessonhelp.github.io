$(function() {

    var header = $("#header");
    var introH = $("#intro").innerHeight();
    var scrollOffset = $(window).scrollTop();

    /* fixed header */
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }

    }


    /* smooth scroll */
    $("[data-scroll]").on("click", function(event) {
       event.preventDefault();

       var blockId = $(this).data('scroll');
       var blockOffset = $(blockId).offset().top;

       $("html, body").animate({
            scrollTop: blockOffset
       }, 500);

    });

    /* menu nav toggle */
    $("#nav_toggle").on("click", function(event){
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    /* collapse */
    $("[data-collapse]").on("click", function(event){
        event.preventDefault();

        var blockId = $(this).data('collapse');

        $(blockId).slideToggle();
    });

    /* slider */
    $("[data-slider]").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        
    });

});