/* TODO: License and name
 * ----------[ Table of Contents ]----------
 *  > 1. Navbar
* ----------------------------------------- */

/* -----------[ 1. Navbar ]---------- */

var isFixed;

$(document).ready(function() {
    isFixed = $(".nav").hasClass("fixed");
    $(".mobile-toggle").click(function() {
        toggleNavElements();
        if ($(".mobile-toggle").hasClass("mobile-toggled")) {
            addNavDropdownLinks();
        } else {
            setTimeout(removeNavDropdownLinks, 500);
        }

        $(".nav-appear a").click(function() {
            toggleNavElements();
            removeNavDropdownLinks();
        });
    });
});

function toggleNavElements() {
    $(".mobile-toggle").toggleClass("mobile-toggled");
    $(".nav-items").toggleClass("nav-appear");
    $(".nav").toggleClass("nav-toggled");
    if (!isFixed) { $(".nav").toggleClass("fixed"); }
}

function addNavDropdownLinks() {
    console.log("add");
    $(".nav-dropdown-item ul li").each(function() {
        $(".nav-items").append("<div class='nav-item nav-appended-dropdown'>" + $(this).html() + "</div>");
    });
}

function removeNavDropdownLinks() {
    console.log("remove");
    $(".nav-appended-dropdown").each(function() {
        $(this).remove();
    });
}
