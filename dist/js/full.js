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
    scrollEvent();
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

navItems.click(function(e) {
    var href = $(this).attr("href");
    $('html, body').stop().animate({ 
        scrollTop: $(href).offset().top - navHeight
    }, 200);
    e.preventDefault();
});

// Scroll event
$(window).scroll(scrollEvent);

function scrollEvent() {
    if (nav.hasClass("nav-scrollspy") || nav.hasClass("nav-background-adapt")) {
        // Get container scroll position
        var fromTop = $(this).scrollTop() + navHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function() {
            if ($(this).offset().top < fromTop)
            return this;
        });

        // Get the id of the current element
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";

        if (nav.hasClass("nav-scrollspy")) {
            if (lastId !== id) {
                lastId = id;
                // Set / remove active class
                navItems.parent().removeClass("active").end().filter("[href='#"+id+"']").parent().addClass("active");
            }
        }

        if (nav.hasClass("nav-background-adapt")) {
            if ($("#" + id).css("background-color") !== "rgba(0, 0, 0, 0)") {
                nav.css("background-color", $("#" + id).css("background-color"));
                $(".nav-items").css("background-color", $("#" + id).css("background-color"));
                $(".nav-items").find(".nav-dropdown-item ul").css("background-color", $("#" + id).css("background-color"));
            } else {
                nav.css("background-color", "white");
                $(".nav-items").css("background-color", "white");
                $(".nav-items").find(".nav-dropdown-item ul").css("background-color", "white");
            }

            var colorString = nav.css("background-color");
            var colorsOnly = colorString.substring(colorString.indexOf('(') + 1, colorString.lastIndexOf(')')).split(/,\s*/);

            navItems.css("color", determineTextColor(colorsOnly[0], colorsOnly[1], colorsOnly[2]));
            $(".nav").find(".nav-dropdown-title").css("color", determineTextColor(colorsOnly[0], colorsOnly[1], colorsOnly[2]));
            $(".nav").find(".nav-dropdown-item ul li a").css("color", determineTextColor(colorsOnly[0], colorsOnly[1], colorsOnly[2]));
            $(".nav").find(".toggle-line").css("background-color", determineTextColor(colorsOnly[0], colorsOnly[1], colorsOnly[2]));
        }
    }
}

// Determines whether text should be black or white based on background color of nav
function determineTextColor(red, green, blue) {
    var c = [red/255, green/255, blue/255];

    for (var i = 0; i < c.length; i++) {
        if (c[i] <= 0.03928) {
            c[i] = c[i] / 12.92;
        } else {
            c[i] = Math.pow((c[i] + 0.055) / 1.055, 2.4);
        }
    }

    var l = 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];

    if (l > 0.179) {
        return "black";
    } else {
        return "white";
    }
}

/* -----------[ 2. Smooth Scroll ]---------- */

$(".smooth-scroll").click(function(e) {
    var href = $(this).attr("href");
    $('html, body').stop().animate({ 
        scrollTop: $(href).offset().top - navHeight
    }, 200);
    e.preventDefault();
});
