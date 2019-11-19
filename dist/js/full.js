/*
  ----------[ Table of Contents ]----------
   > 1. Smooth scroll
  -----------------------------------------
*/

// -----------[ 1. Smooth Scroll ]----------

// Overrides default page scroll functionality & instead uses smooth scroll
$(".smooth-scroll").click(function(e) {
    var href = $(this).attr("href");
    $('html, body').stop().animate({
        scrollTop: $(href).offset().top - navHeight + 1
    }, 300);
    e.preventDefault();
});
