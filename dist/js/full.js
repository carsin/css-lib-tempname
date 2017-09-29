/* TODO: License and name
 * ----------[ Table of Contents ]----------
 *  > 1. Navbar
 *  > 2. Smooth scroll
 * ----------------------------------------- */

/* -----------[ 1. Navbar ]---------- */

var isFixed;
var clicked = false;

$(document).ready(function() {
    isFixed = $(".nav").hasClass("fixed");
    // Show nav on click
    $(".mobile-toggle").click(function() {
        toggleNavElements();
        if ($(".mobile-toggle").hasClass("mobile-toggled")) {
            addNavDropdownLinks();
        } else {
            removeNavDropdownLinks();
        }

        if (!clicked) {
            $(".nav-appear .nav-item a").click(hideNav);
            clicked = true;
        }
    });
});

// Remove navbar when clicking on a link
function hideNav() {
	if ($(window).width() < 799){
  	    toggleNavElements();
        console.log("click");
        removeNavDropdownLinks();
    }
}

// Show mobile full screen nav
function toggleNavElements() {
    $(".mobile-toggle").toggleClass("mobile-toggled");
    $(".nav-items").toggleClass("nav-appear");
    $(".nav").toggleClass("nav-toggled");
    $("body").toggleClass("no-scroll");
    if (!isFixed) { $(".nav").toggleClass("fixed"); }
}

// Add links from dropdown menus into regular mobile nav
function addNavDropdownLinks() {
    $(".nav-dropdown-item ul li").each(function() {
        $(".nav-items").append("<div class='nav-item nav-appended-dropdown'>" + $(this).html() + "</div>");
    });
}

// Remove Dropdown links from regular mobile nav
function removeNavDropdownLinks() {
    $(".nav-appended-dropdown").each(function() {
        $(this).remove();
    });
}

// Scrollspy variables
var lastId;
var nav = $(".nav");
var navHeight = nav.outerHeight();
var navItems = $(".nav").find(".nav-item a");
var scrollItems = navItems.map(function() {
    var item = $($(this).attr("href"));
    if (item.length) { return item; }
});

// Default smooth scroll
navItems.click(function(e) {
    var href = $(this).attr("href");
    $('html, body').stop().animate({ 
        scrollTop: $(href).offset().top - navHeight
    }, 200);
    e.preventDefault();
});

// Scroll event
$(window).scroll(function(){
    if (nav.hascLass("nav-transparent-animated"))
    if (nav.hasClass("nav-scrollspy")) {
        // Get container scroll position
        var fromTop = $(this).scrollTop() + navHeight * 5;

        // Get id of current scroll item
        var cur = scrollItems.map(function(){
            if ($(this).offset().top < fromTop)
            return this;
        });

        // Get the id of the current element
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set / remove active class
            navItems.parent().removeClass("active").end().filter("[href='#"+id+"']").parent().addClass("active");
        }
    }
});

/* -----------[ 2. Smooth Scroll ]---------- */

$(".smooth-scroll").click(function(e) {
    var href = $(this).attr("href");
    $('html, body').stop().animate({ 
        scrollTop: $(href).offset().top - navHeight
    }, 200);
    e.preventDefault();
});
