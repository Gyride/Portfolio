$(document).ready(function(){
  var smashRoster = ["img/chr_13_donkey_01.png", "img/chr_13_donkey_08.png", "img/chr_13_ness_01.png", "img/chr_13_ness_06.png", "img/chr_13_purin_01.png", "img/chr_13_purin_04.png", "img/chr_13_ryu_01.png", "img/chr_13_ryu_02.png", "img/chr_13_samus_01.png", "img/chr_13_samus_02.png"];
  var count = 0;

  $("#next").on("click", function(){
    if (count == smashRoster.length - 1) {
      count = 0;
    } else {
      count += 1;
    }
    $("img").attr("src", smashRoster[count]);
  });

  $("#last").on("click", function(){
    if (count == 0) {
      count = smashRoster.length - 1;
    } else {
      count -= 1;
    }
    $("img").attr("src", smashRoster[count]);
  });

});
