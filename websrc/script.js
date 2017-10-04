$(window).scroll(function() {
    // logos.png
    if ($(".nav-items .nav-item a").css("color") === "rgb(0, 0, 0)") {
        $("#nav-adaptive-icon").attr("src", "websrc/img/logos.png");
    } else {
        $("#nav-adaptive-icon").attr("src", "websrc/img/logo-white.png");
    }
});

