$(document).ready( function() {
    $(document).click(function(event) {
        if ($(event.target).closest(".menu").length) return;
        $(".menu").animate({
            left: '-285px'
        }, 200);
        $('body').animate({
            left: '0px'
        }, 200);
        event.stopPropagation();
    });
    $(".nano").nanoScroller();
});
