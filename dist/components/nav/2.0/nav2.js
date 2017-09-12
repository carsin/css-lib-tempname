$(document).ready(function() {
    $(".fa-bars").click(function() {
        $(".text-menu").toggleClass('menu-appear');
    });
  
    $("nav .text-menu a").click(function() {
        $(".text-menu").toggleClass('menu-appear');
    });
});
