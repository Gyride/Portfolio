$(document).ready(function () {
    $("#hamburger").on("click", function () {
        $(this).siblings("li").toggleClass("show");
    });
});