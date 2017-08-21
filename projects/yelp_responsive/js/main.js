$(document).ready(function () {
    $("#hamburger").on("click", function () {
        $(this).siblings("span").toggleClass("show");
    });
});