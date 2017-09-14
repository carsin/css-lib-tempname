/* TODO: License and name
 * ----------[ Table of Contents ]----------
 *  > 1. Navbar
* ----------------------------------------- */

/* -----------[ 1. Navbar ]---------- */

$(document).ready(function() {
    $(".mobile-toggle").click(function() {
        $(".mobile-toggle").toggleClass("toggled");
        $(".nav-items").toggleClass("nav-appear");
        $(".nav").toggleClass("toggled");
    });
  
    $(".nav .nav-items a").click(function() {
        $(".mobile-toggle").toggleClass("toggled");
        $(".nav-items").toggleClass("nav-appear");
        $(".nav").toggleClass("toggled");
    });
});
