$(document).ready(function() {
    $(".mobile-toggle").click(function() {
        $(".nav-items").toggleClass("menu-appear");
    });
  
    $(".nav .nav-items a").click(function() {
        $(".nav-items").toggleClass("menu-appear");
    });
});
