/* TODO: License and name
 * ----------[ Table of Contents ]----------
 *  > 1. Navbar
* ----------------------------------------- */

/* -----------[ 1. Navbar ]---------- */

var isFixed;

$(document).ready(function() {
    isFixed = $(".nav").hasClass("fixed");

    // Show nav on click
    $(".mobile-toggle").click(function() {
        toggleNavElements();
        if ($(".mobile-toggle").hasClass("mobile-toggled")) {
            addNavDropdownLinks();
        } else {
            setTimeout(removeNavDropdownLinks, 500);
        }

        // Remove navbar when clicking on a link
        $(".nav-appear a").click(function() {
            toggleNavElements();
            removeNavDropdownLinks();
        });
    });
});

// Show mobile full screen nav

function toggleNavElements() {
    $(".mobile-toggle").toggleClass("mobile-toggled");
    $(".nav-items").toggleClass("nav-appear");
    $(".nav").toggleClass("nav-toggled");
    if (!isFixed) { $(".nav").toggleClass("fixed"); }
}

// Add links from dropdown menus into regular mobile nav
function addNavDropdownLinks() {
    console.log("add");
    $(".nav-dropdown-item ul li").each(function() {
        $(".nav-items").append("<div class='nav-item nav-appended-dropdown'>" + $(this).html() + "</div>");
    });
}

// Remove Dropdown links from regular mobile nav
function removeNavDropdownLinks() {
    console.log("remove");
    $(".nav-appended-dropdown").each(function() {
        $(this).remove();
    });
}
