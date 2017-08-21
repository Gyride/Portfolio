$(document).ready(function () {
    $("#hamburger").on("click", function (){
        if($("header ul").length == 0){
            $("nav").append("<ul style=\"float:right; margin-right: 10px\"><li>Popular</li><li>Recent</li><li>Slate Plus</li></ul>");
        } else if ($("header ul").length == 1) {
            $("header ul").remove();
        }
    });
});