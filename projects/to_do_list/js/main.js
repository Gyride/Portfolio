$(document).ready(function(){
  var toDo = 0;

  $.fn.updateTodo = function(){
    var toDo = $("li").length - $(".done").length;
    if(toDo != 1){
      $("h2").html("You have " + toDo + " todos left");
    }else {
      $("h2").html("You have " + toDo + " todo left");
    }
  };

  $("#addList").on("click", function(){
    if ($("input").val() != ""){
      var userInput = $("input").val();
      $("ul").append("<li><span class=\"item\">" + userInput + "</span><span class=\"edit hidden\">Edit</span><span class=\"remove hidden\">Remove</span></li>");
    }
    $("input").val("");
    $(document).updateTodo();
  });

  $("ul").on("click", "li", function(){
    $(this).find(".item").toggleClass("done");
    $(document).updateTodo();
  });

  $("#clearList").on("click", function(){
    $("li").remove();
    $(document).updateTodo();
  });

  $("#clearCompleted").on("click", function(){
    $(".done").parent("li").remove();
    $(document).updateTodo();
  });

  $("ul").on("mouseenter mouseleave", "li", function(){
    $(this).find(".edit, .remove").toggleClass("hidden");
  });

  $("ul").on("click", ".remove", function(){
    $(this).parent("li").remove();
    $(document).updateTodo();
  });

  $("ul").on("click", ".edit", function(){
    var userInput = $(this).siblings(".item").html();
    $(this).parent("li").replaceWith("<li><input type=\"text\" value=\"" + userInput + "\"><button type=\"submit\">Confirm</button></li>");
  });

  $("ul").on("click", "button", function(){
    console.log("run")
    var userInput = $(this).siblings("input").val();
    $(this).parent("li").replaceWith("<li><span class=\"item\">" + userInput + "</span><span class=\"edit hidden\">Edit</span><span class=\"remove hidden\">Remove</span></li>");
  });

  $(document).on("keypress", function(){
    if ($("div input").is(":focus")){
      if (event.which == 13) {
        if ($("div input").val() != ""){
          var userInput = $("div input").val();
          $("ul").append("<li><span class=\"item\">" + userInput + "</span><span class=\"edit hidden\">Edit</span><span class=\"remove hidden\">Remove</span></li>");
        }
        $("input").val("");
        $(document).updateTodo();
      }
    } else if ($("ul input").is(":focus")){
      if (event.which == 13) {
        if ($("ul input:focus").val() != ""){
          var userInput = $("ul input").val();
          $("ul input:focus").parent("li").replaceWith("<li><span class=\"item\">" + userInput + "</span><span class=\"edit hidden\">Edit</span><span class=\"remove hidden\">Remove</span></li>");
        }
      }
    }
  });
});
