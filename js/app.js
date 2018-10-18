// app.js for ogilvy theme

// menu dropdown
jQuery( document ).ready(function() {
    jQuery('nav .active .is-active').on( "click", function(e) {
        e.preventDefault();
        jQuery(this).next().toggle();
    });
});